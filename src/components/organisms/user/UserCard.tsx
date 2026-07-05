import { Box, Image, Stack, Text } from "@chakra-ui/react"
import { memo } from "react";

type Props = {
    id: number;
    imageUrl: string;
    name: string;
    username: string;
    onClick: (id: number) => void;
};

export const UserCard = memo((props: Props) => {
    const { imageUrl, name, username, onClick, id } = props;
    return (
        <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8}} onClick={() => onClick(id)}>
            <Stack textAlign="center">
                <Image borderRadius="full" boxSize="160px" src={imageUrl} alt="User Profile" m="auto"></Image>
                <Text fontSize="lg" fontWeight="bold">
                    {username}
                </Text>
                <Text fontSize="sm" color="gray">
                    {name}
                </Text>
            </Stack>
        </Box>
    );
})