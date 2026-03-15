import { memo } from 'react';
import { Icon, IconButton } from '@chakra-ui/react';
import { LuMenu } from "react-icons/lu"; // Lucideのメニューアイコン

type Props = {
    onOpen : () => void;
}

export const MenuIconButton = memo((props: Props) => {
    const { onOpen } = props;
    const Lumenu = LuMenu as any;
    return (
        <IconButton aria-label="Menu" size="sm" variant='solid' backgroundColor='teal.500' onClick={onOpen}>
            <Icon as={Lumenu} />
        </IconButton>
    );
})