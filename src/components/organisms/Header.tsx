import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { MenuDrawer } from "../molecules/MenuDrawer";
import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { useNavigate } from "react-router-dom";

export const Header = memo(() => {
    const {open, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const onClickTop = useCallback(() => navigate('/top'), [navigate]);
    const onClickAccountPage = useCallback(() => navigate('/account-page'), [navigate]);
    const onClickTermsOfUse = useCallback(() => navigate('/terms-of-use'), [navigate]);
    const onClickTransition = useCallback(() => navigate('/transition'), [navigate]);
    const onClickReactQuery = useCallback(() => navigate('/react-query'), [navigate]);
    return (
        <>
            <Flex as="nav" bg="teal.500" color="white" align="center" justify="space-between" padding={{ base: 3, md: 5}}>
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg"}}>
                        App
                    </Heading>
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={4}>
                        <Link color="white">User List</Link>
                    </Box>
                    <Box pr={4}>
                        <Link color="white">Setting</Link>
                    </Box>
                </Flex>
                <MenuIconButton onOpen={onOpen}/>
            </Flex>
            <MenuDrawer open={open} onClose={onClose} onClickTop={onClickTop} onClickAccountPage={onClickAccountPage} onClickTermsOfUse={onClickTermsOfUse} onClickTransition={onClickTransition} onClickReactQuery={onClickReactQuery}/>
    </>
    );
})