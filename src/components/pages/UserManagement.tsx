import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { memo, useCallback, useEffect, useState } from 'react';
import { UserDetailDialog } from '../organisms/user/UserDetailDialog';
import { UserCard } from '../organisms/user/UserCard';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useSelectUser } from '../../hooks/useSeletUser';
import { useAllUsers } from '../../hooks/useAllUsers';

export const UserManagement = memo(() => {
    const [isOpen, setIsOpen] = useState<boolean>(false); 
    const { getUsers, updateUsers,loading, users } = useAllUsers();
    const { selectedUser, onSelectUser } = useSelectUser();
    const { loginUser } = useLoginUser();
 
    useEffect(() => getUsers(), [getUsers]);

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, setIsOpen });
    }, [users, onSelectUser, setIsOpen]);

    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <Wrap gap="30px" p={{ base: 4, md: 10 }}>
                    {users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard
                                id={user.id}
                                imageUrl="https://images.unsplash.com/photo-1544568100-847a948585b9"
                                name={user.name}
                                username={user.username}
                                onClick={onClickUser}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            )}
            <UserDetailDialog isOpen={isOpen} setIsOpen={setIsOpen} user={selectedUser} isAdmin={loginUser?.isAdmin} onUpdateUser={updateUsers} />
        </>
    );
})