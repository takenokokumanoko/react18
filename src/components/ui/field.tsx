import { Field as ChakraField } from "@chakra-ui/react"
import * as React from "react"

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  label?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  optionalText?: React.ReactNode
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const { label, children, helperText, errorText, optionalText, ...rest } =
      props

    const ChakraFieldLabel= ChakraField.Label as any;
    const ChakraFieldHelperText = ChakraField.HelperText as any;
    const ChakraFieldErrorText = ChakraField.ErrorText as any;
    
    return (
      <ChakraField.Root ref={ref} {...rest}>
        {label && (
          <ChakraFieldLabel>
            {label}
            <ChakraField.RequiredIndicator fallback={optionalText} />
          </ChakraFieldLabel>
        )}
        {children}
        {helperText && (
          <ChakraFieldHelperText>{helperText}</ChakraFieldHelperText>
        )}
        {errorText && (
          <ChakraFieldErrorText>{errorText}</ChakraFieldErrorText>
        )}
      </ChakraField.Root>
    )
  },
)
