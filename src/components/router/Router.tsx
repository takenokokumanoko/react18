import { Route, Routes } from "react-router-dom";
import { homeRouter } from "./HomeRouter";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={
                <p>HOME</p>
                } />
                {homeRouter.map((list) => (
                    <Route key={list.path} path={list.path} element={<HeaderLayout>{list.element}</HeaderLayout>} />
                ))}
        </Routes>
    );
}