import axios from "axios";
import { useCallback, useState } from "react"
import type { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
    const { showMessage } = useMessage();

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<Array<User>>([]);

    // get users from API
    const getUsers = useCallback(() => {
        setLoading(true);
        axios.get<Array<User>>(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            setUsers(res.data);
        }).catch(() => showMessage({title: "Failed to fetch users", status: "error"})).finally(() => setLoading(false));
    }, [showMessage, setLoading, setUsers])

    // update users
    const updateUsers = useCallback((updateUser: User) => {
        setUsers((prevUsers) => prevUsers.map((user) => user.id === updateUser.id ? updateUser : user));
    }, [setUsers])

    return { getUsers, updateUsers,loading, users }
}