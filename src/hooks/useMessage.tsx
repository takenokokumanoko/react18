
import { useCallback } from "react";
import { toaster } from "../components/ui/toaster";

type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
    const showMessage = useCallback((props: Props) => {
        const { title, status } = props;
        toaster.create({
            title: title,
            type: status,
            duration: 2000,
        });
    }, []);
    // オブジェクトとして返すことで、今後 showMessage以外の関数を追加した場合に呼び出し元のコードを
    // 変更せずに済むようにする
    return { showMessage };
}