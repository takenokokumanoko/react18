import { useState } from "react";
import { Avatar } from "../Avatar";
import { TaskList } from "./TaskList";

export type Task = {
    id: number;
    title: string;
    assignee: string;
}

const member = {
    a: "A",
    b: "B",
    c: "C",
}

const generateDummyTasks = (): Task[] => {
    return Array(10).fill("").map((_, index) => {
        const addedIndex = index + 1;
        return {
            id: addedIndex,
            title: `Task${addedIndex}`,
            assignee: addedIndex % 3 === 0 ? member.a : addedIndex % 2 === 0 ? member.b : member.c,
        }
    })
}

const tasks = generateDummyTasks();

const filteringAssignee = (assignee: string) => {
    if (assignee === "") return tasks;
    return tasks.filter((task) => task.assignee === assignee);
}

export const Transition = () => {
    //const [isPending, startTransition] = useTransition();
    const [seletedAssignee, setSelectedAssignee] = useState<string>("");
    const [taskList, setTaskList] = useState<Task[]>(tasks);
    const [isShowList, setIsShowList] = useState<boolean>(false); 

    const onClickAssignee = (assignee: string) => {
        setSelectedAssignee(assignee);
        // startTransition(() => {
        //     setTaskList(filteringAssignee(assignee));
        // });
        setTaskList(filteringAssignee(assignee));
    }

    return (
        <div>
            <p>Transition</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Avatar isSelected={seletedAssignee === member.a} onClick={onClickAssignee}>A</Avatar>
                <Avatar isSelected={seletedAssignee === member.b} onClick={onClickAssignee}>B</Avatar>
                <Avatar isSelected={seletedAssignee === member.c} onClick={onClickAssignee}>C</Avatar>
            </div>  
            <br />
            <button onClick={() => onClickAssignee("")}>Reset</button>     
            <br />
            <br />
            <button onClick={() => setIsShowList(!isShowList)}>Switch</button>
            {isShowList && <TaskList taskList={taskList} />}
        </div>
    );
}