import { useCallback, useState } from "react"
import type { User } from "../types/api/user";

type Props = {
    id: number;
    users: Array<User>;
    setIsOpen: (isOpen: boolean) => void;
}

export const useSelectUser = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const  onSelectUser = useCallback((props: Props) => {
        const { id, users, setIsOpen } = props;
        const targetUser = users.find((user) => user.id === id);
            setSelectedUser(targetUser ?? null);    // targetUserがundefinedの場合nullをセット
            setIsOpen(true);
     }, []);
    return { selectedUser, onSelectUser }
}