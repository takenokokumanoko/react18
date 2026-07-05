import { DialogActionTrigger, DialogBody, DialogFooter, DialogHeader, DialogRoot, Input, Portal, Stack } from "@chakra-ui/react"
import { memo, useEffect, useState } from "react";
import type { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { DialogCloseTrigger, DialogContent, DialogTitle } from "../../ui/dialog";
import { Field } from "../../ui/field";

type Props = {
    user: User | null;
    isOpen: boolean;
    isAdmin?: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onUpdateUser: (user: User) => void;
};

export const UserDetailDialog = memo((props: Props) => {
    const { user, isOpen, isAdmin = false, setIsOpen, onUpdateUser } = props;
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (user) {
            setUsername(user?.username ?? "");
            setName(user?.name ?? "");
            setEmail(user?.email ?? "");
            setPhone(user?.phone ?? "");
        }
    }, [user]);

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

    const onClickUpdate  = () => {
        if (!user) return;
        if (username === "" || name === "" || email === "" || phone === "") {
            alert("Please fill in all fields.");
            return;
        }
        if (username === user.username && name === user.name && email === user.email && phone === user.phone) return;
        
        alert("Update User");
        const updateUser: User = {
          ...user,
          username,
          name,
          email,
          phone,
        };
        onUpdateUser(updateUser);
    }

    return (
      <DialogRoot open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <Portal>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>User Details</DialogTitle>
              </DialogHeader>
              <DialogBody mx={4}>
                <Stack gap={4}>
                { /* TODO:Bodyの中身は書き換えて*/ }
                    <Field label="Username" readOnly={!isAdmin}>
                      <Input value={username} onChange={onChangeUsername} />
                    </Field>
                    <Field label="Name" readOnly={!isAdmin}>
                      <Input value={name} onChange={onChangeName} />
                    </Field>
                    <Field label="Email" readOnly={!isAdmin}>
                      <Input value={email} onChange={onChangeEmail} />
                    </Field>
                    <Field label="Phone" readOnly={!isAdmin}>
                      <Input value={phone} onChange={onChangePhone} />
                    </Field>
                { /* TODO:Bodyの中身は書き換えて*/ }
                </Stack>
              </DialogBody>
              {isAdmin && (
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <PrimaryButton onClick={onClickUpdate}>Update</PrimaryButton>
                  </DialogActionTrigger>
                </DialogFooter>
              )}
              <DialogCloseTrigger />
            </DialogContent>
        </Portal>
      </DialogRoot>
    );


    // return (
    //     <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
    //         <ModalOverlay />
    //         < pb={2}>
    //             <ChakraModalHeader>User Details</ChakraModalHeader>
    //             <ChakraModalCloseButton />
    //             <ChackraModalBody mx={4}>
    //                 <ChackraStack spacing={4}>
    //                     <ChakraFormControl>
    //                         <ChakraFormLabel>Username</ChakraFormLabel>
    //                         <ChakraInput value={username} onChange={onChangeUsername} isReadOnly={!isAdmin}/>
    //                         <ChakraFormLabel>Name</ChakraFormLabel>
    //                         <ChakraInput value={name} onChange={onChangeName} isReadOnly={!isAdmin}/>
    //                         <ChakraFormLabel>Mail</ChakraFormLabel>
    //                         <ChakraInput value={email} onChange={onChangeEmail} isReadOnly={!isAdmin}/>
    //                         <ChakraFormLabel>Tell</ChakraFormLabel>
    //                         <ChakraInput value={phone} onChange={onChangePhone} isReadOnly={!isAdmin}/>
    //                     </ChakraFormControl>
    //                 </ChackraStack>
    //             </ChackraModalBody>
    //             {isAdmin && (
    //                 <ChakraModalFooter>
    //                     <PrimaryButton onClick={onClickUpdate}>Update</PrimaryButton>
    //                 </ChakraModalFooter>
    //             )}
    //         </ChakraModalContent>
    //     </Modal>        
    //);
})