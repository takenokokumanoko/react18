import { memo, type ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}

export const PrimaryButton = memo((props: Props) => {
    const ChakraButton = Button as any;

    const { children, disabled = false, loading = false, onClick } = props;
    return (
    <ChakraButton bg="teal.400" color="white" _hover={{ opacity: 0.8}} isLoading={loading} disabled={disabled} onClick={onClick}>{children}</ChakraButton>
    );
})