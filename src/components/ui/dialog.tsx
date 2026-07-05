import { Dialog as ChakraDialog, Portal } from "@chakra-ui/react"
import { CloseButton } from "./close-button"
import * as React from "react"

interface DialogContentProps extends ChakraDialog.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement | null>
  backdrop?: boolean
  children?: React.ReactNode
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(function DialogContent(props, ref) {
  const {
    children,
    portalled = true,
    portalRef,
    backdrop = true,
    ...rest
  } = props

  const ChakraDialogPositioner = ChakraDialog.Positioner as any;
  const ChakraDialogContent = ChakraDialog.Content as any;
  //const ChakraDialogPositioner = ChakraDialog.Positioner as React.FC<React.PropsWithChildren<any>>;
  //const ChakraDialogContent = ChakraDialog.Content as React.FC<React.PropsWithChildren<any>>;

  return (
    <Portal disabled={!portalled} container={portalRef}>
      {backdrop && <ChakraDialog.Backdrop />}
      <ChakraDialogPositioner>
        <ChakraDialogContent ref={ref} {...rest}>
          {children}
        </ChakraDialogContent>
      </ChakraDialogPositioner>
    </Portal>
  )
})

export interface DialogCloseTriggerProps extends ChakraDialog.CloseTriggerProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

export const DialogCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  DialogCloseTriggerProps
>(function DialogCloseTrigger(props, ref) {
  const ChakraDialogCloseTrigger = ChakraDialog.CloseTrigger as React.FC<ChakraDialog.CloseTriggerProps & { children?: React.ReactNode; asChild?: boolean } & Record<string, any>>;
  return (
    <ChakraDialogCloseTrigger
      position="absolute"
      top="2"
      insetEnd="2"
      {...props}
      asChild
    >
      <CloseButton size="sm" ref={ref}>
      </CloseButton>
    </ChakraDialogCloseTrigger>
  )
})

export const DialogRoot = ChakraDialog.Root
export const DialogFooter = ChakraDialog.Footer
export const DialogHeader = ChakraDialog.Header
export const DialogBody = ChakraDialog.Body
export const DialogBackdrop = ChakraDialog.Backdrop
//export const DialogTitle = ChakraDialog.Title
export const DialogTitle = ChakraDialog.Title as React.FC<ChakraDialog.TitleProps & { children?: React.ReactNode }>
export const DialogDescription = ChakraDialog.Description
//export const DialogTrigger = ChakraDialog.Trigger
export const DialogTrigger = ChakraDialog.Trigger as React.FC<ChakraDialog.TriggerProps & { asChild?: boolean; children?: React.ReactNode }>
export const DialogActionTrigger = ChakraDialog.ActionTrigger
