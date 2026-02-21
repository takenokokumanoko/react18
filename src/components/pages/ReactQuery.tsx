import { Sidebar } from "../Sidebar";
import { AlbumList } from "./AlbumList";
import { TodoList } from "./TodoList";
import { Suspense, useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Tabs = "todo" | "album";

export const ReactQuery = () => {
    // setSelettedTabの更新を遅延させるためにuseTransitionを使用
    const [selectedTab, setSelectedTab] = useState<Tabs>("todo");
    const [isPending, startTransition] = useTransition();

    const onClickTabButton = (tab: Tabs) => {
        startTransition(() => {
            setSelectedTab(tab);
        });
    }
    
    const buttonStyle = {
        padding: "12px", 
        fontSize: "16px",
        border: "none",
        opacity: isPending ? 0.5 : 1,
    }
    const albumButtonStyle = {
        ...buttonStyle,
        backgroundColor: selectedTab === "album" ? "royalblue" : "white",
        color: selectedTab === "album" ? "white" : "black",
    }
    const todoButtonStyle = {
        ...buttonStyle,
        backgroundColor: selectedTab === "todo" ? "royalblue" : "white",
        color: selectedTab === "todo" ? "white" : "black",
    }

    return (
        <div style={{ display: "flex", padding: "16px" }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                <button style={todoButtonStyle} onClick={() => onClickTabButton("todo")}>Todo</button>
                <button style={albumButtonStyle} onClick={() => onClickTabButton("album")}>Album</button>
                <ErrorBoundary fallback={<p>{selectedTab} Error</p>}>
                    <Suspense fallback={<p>{selectedTab} Loading</p>}>
                        {selectedTab === "todo" ? <TodoList /> : <AlbumList />}
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>
    );
}