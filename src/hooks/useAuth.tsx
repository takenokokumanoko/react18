import axios from "axios";
import { useCallback, useState } from "react"
import type { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessage();
    const { setLoginUser } = useLoginUser();

    const [loading, setLoading] = useState(false);

    // TODO: 削除
    //const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
    //type LoginUser = User & { isAdmin: boolean };
    //


    const login = useCallback((id: string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if (res.data) {
                const isAdmin = res.data.id === 10 ? true : false; //今は管理者はid=10の時だけ

                setLoginUser({...res.data, isAdmin});

                showMessage({title: "Login Success", status: "success"});
                navigate("/top");
            } else {
                showMessage({title: "Login Failed", status: "error"});
                setLoading(false);
            }
        }).catch(() => {
            showMessage({title: "No User", status: "error"})
            setLoading(false);
        });
    }, [navigate, showMessage, setLoginUser]);
    return { login, loading }
}