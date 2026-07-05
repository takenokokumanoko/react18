import { createContext, useState, type Dispatch, type SetStateAction } from "react";
import type { User } from "../types/api/user";

// 擬似的にisAdminを追加
// APIから取得したユーザー情報にisAdminプロパティを追加して、管理者かどうかを判定するためのもの
// ここでは、ユーザーIDが10の場合は管理者とする
type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
    loginUser: LoginUser | null;
    setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

// Contextの作成
export const LoginUserContext = createContext<LoginUserContextType>(
    // 初期値として空のオブジェクトを渡すが、型定義を設定することで、Contextの値がLoginUserContextTypeであることを保証する
    // 本来であれば型エラーになるが、後からLoginUserContextTypeにするから一旦このまま進めて欲しいという意味で、型アサーションを使っている
    {} as LoginUserContextType
);

// Providerの作成
// valueに渡した値がchildrenでグローバルな値として使用可能になる
export const LoginUserProvider = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </LoginUserContext.Provider>
    );
};