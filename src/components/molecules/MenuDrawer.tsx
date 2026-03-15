import React, { memo } from 'react';
import { Button, Drawer, Portal } from '@chakra-ui/react';

type Props = {
    open: boolean;
    onClose: () => void;
    onClickTop: () => void;
    onClickAccountPage: () => void;
    onClickTermsOfUse: () => void;
    onClickTransition: () => void;
    onClickReactQuery: () => void;
}
const DrawerContent = Drawer.Content as any;
const DrawerPositioner = Drawer.Positioner as any;

export const MenuDrawer = memo((props: Props) => {
    const {open, onClose, onClickTop, onClickAccountPage, onClickTermsOfUse, onClickTransition, onClickReactQuery} = props;
    const onClickButton = (action: () => void) => {
        action();
        onClose();
    }
    return (
    <Drawer.Root placement="start" size="xs" open={open} onOpenChange={(e: { open: boolean }) => !e.open && onClose()}>
        <Portal>
            <Drawer.Backdrop />
            <DrawerPositioner>
                <DrawerContent>
                    <Drawer.Body p={0} bg='gray.150'>
                        <Button onClick= {() => onClickButton(onClickTop)} variant='ghost' w="100%">TOP</Button>
                        <Button onClick={() => onClickButton(onClickAccountPage)} variant='ghost' w="100%">AccountPage</Button>
                        <Button onClick={() => onClickButton(onClickTermsOfUse)} variant='ghost' w="100%">TermsOfUse</Button>
                        <Button onClick={() => onClickButton(onClickTransition)} variant='ghost' w="100%">Transition</Button>
                        <Button onClick={() => onClickButton(onClickReactQuery)} variant='ghost' w="100%">ReactQuery</Button>
                    </Drawer.Body>
                </DrawerContent>
            </DrawerPositioner>
        </Portal>
    </Drawer.Root>
    );
});