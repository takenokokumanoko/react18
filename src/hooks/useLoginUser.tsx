import { useContext } from "react";
import { LoginUserContext, type LoginUserContextType } from "../providers/LoginUserProvider";

// 毎回useContext(LoginUserContext)と書いて型定義も設定するのは面倒なので、useLoginUserというカスタムフックを作成
// することで、useLoginUserを呼び出すだけで、LoginUserContextの値を取得できるようにする
export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
