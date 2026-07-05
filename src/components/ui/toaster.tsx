"use client"

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react"

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
})

export const Toaster = () => {
  const ToastTitle = Toast.Title as any;
  const ToastDescription = Toast.Description as any;
  const ToastActionTrigger = Toast.ActionTrigger as any;
  return (
    <Portal>
      {/* 1. ChakraToaster は children を持たないので、閉じタグをなくすか、型を合わせる必要があります */}
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }} {...({} as any)}>
        {(toast: any) => ( // 2. toast の型を明示するか、スニペットの構造に合わせる
          <Toast.Root width={{ md: "sm" }} key={toast.id}>
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Stack gap="1" flex="1" maxWidth="100%">
              {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
              {toast.description && (
                <ToastDescription>{toast.description}</ToastDescription>
              )}
            </Stack>
            {toast.action && (
              <ToastActionTrigger>{toast.action.label}</ToastActionTrigger>
            )}
            {/* 3. closable プロパティの有無を確認 */}
            {toast.meta?.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
