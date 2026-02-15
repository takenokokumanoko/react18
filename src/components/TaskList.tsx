import { useDeferredValue } from "react";
import type { Task } from "./Transition";

type Props = {
    taskList: Task[];
}

export const TaskList = ({ taskList }: Props) => {
    // useDeferredValueはstartTransitionと同様に更新を遅延させるためのフック
    // 使い分けは、コンポーネント内で更新を遅延させたい場合はuseDeferredValue、同じファイル内で更新を遅延させたりisPandingを使用したい場合はuseTransitionを使用する
    const deferredTaskList = useDeferredValue(taskList);
    return (
        <>
        {deferredTaskList.map((task) => (
        //<div key={task.id} style={{ width: "300px", margin: "auto", background: "lavender", opacity: isPending ? 0.5 : 1}}>
        <div key={task.id} style={{ width: "300px", margin: "auto", background: "lavender" }}>
            <p>title:{task.title}</p>
            <p>assignee:{task.assignee}</p>
        </div>
        ))}
        </>
    );
}