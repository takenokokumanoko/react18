import { memo } from "react";
import { Header } from "../organisms/Header";

type Props = {
    children: React.ReactNode;
}

export const HeaderLayout = memo(({ children } :Props) => {
    return (
        <>
        <Header />
        {children}
        </>
    );
})