import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import { memo, useCallback, useEffect } from 'react';
import { UserDetailDialog } from '../organisms/user/UserDetailDialog';
import { UserCard } from '../organisms/user/UserCard';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useSelectUser } from '../../hooks/useSeletUser';
import { useAllUsers } from '../../hooks/useAllUsers';

export const UserManagement = memo(() => {
    const ChakraWrap = Wrap as any;
    const ChakraWrapItem = WrapItem as any;
    const ChakraCenter = Center as any;
    const ChakraSpinner = Spinner as any;

    const { open, onOpen, onClose } = useDisclosure();
    const { getUsers, loading, users } = useAllUsers();
    const { selectedUser, onSelectUser } = useSelectUser();
    const { loginUser } = useLoginUser();
 
    useEffect(() => getUsers(), );

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, onOpen });
    }, [users, onSelectUser, onOpen]);

    return (
        <div>
            <h1>UseManagement</h1>
        </div>
    );

    // TODO: 画面が点滅するので修正する
    /*

    return (
        <>
            {loading ? (
                <ChakraCenter h="100vh">
                    <ChakraSpinner />
                </ChakraCenter>
            ) : (
                <ChakraWrap spacing="30px" p={{ base: 4, md: 10 }}>
                    {users.map((user) => (
                        <ChakraWrapItem key={user.id} mx="auto">
                            <UserCard
                                id={user.id}
                                imageUrl="https://images.unsplash.com/photo-1544568100-847a948585b9"
                                name={user.name}
                                username={user.username}
                                onClick={onClickUser}
                            />
                        </ChakraWrapItem>
                    ))}
                </ChakraWrap>
            )}
            <UserDetailDialog isOpen={open} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin} />
        </>
    );
    */
})