import { Box, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { memo, useState, type ChangeEvent } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';


export const Login = memo(() => {
    const { login, loading } = useAuth();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const onClickLogin = () => login(userId);

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="md" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="3xl" textAlign="center">User Management App</Heading>
                <Stack gap={5}>
                    <Box borderBottom="1px solid" borderColor="gray.200" my={4} />
                    <Input placeholder="userID" value={userId} onChange={onChangeUserId}/>
                    <Input placeholder="password" value={password} onChange={onChangePassword}/>
                    <PrimaryButton disabled={!userId || !password || loading} loading={loading} onClick={onClickLogin}>Login</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    );
})