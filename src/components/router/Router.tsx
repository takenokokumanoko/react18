import { Route, Routes } from "react-router-dom";
import { homeRouter } from "./HomeRouter";
import { HeaderLayout } from "../templates/HeaderLayout";
import { Login } from "../pages/Login";
import { LoginUserProvider } from "../../providers/LoginUserProvider";

export const Router = () => {
    return (
        <LoginUserProvider>
            <Routes>
                { /* Header無のルーティング */ }
                <Route path="/" element={<Login />} />

                { /* Header有のルーティング */ }
                <Route element={<HeaderLayout />}>
                    {homeRouter.map((list) => (
                        <Route key={list.path} path={list.path} element={list.element} />
                    ))}
                </Route>
            </Routes>
        </LoginUserProvider>
    );
}