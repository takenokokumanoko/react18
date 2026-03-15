import { Route, Routes } from "react-router-dom";
import { homeRouter } from "./HomeRouter";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Router = () => {
    return (
            <Routes>
                { /* Header無のルーティング */ }
                <Route path="/" element={
                    <p>HOME</p>
                } />

                { /* Header有のルーティング */ }
                <Route element={<HeaderLayout />}>
                    {homeRouter.map((list) => (
                        <Route key={list.path} path={list.path} element={list.element} />
                    ))}
                </Route>
            </Routes>
    );
}