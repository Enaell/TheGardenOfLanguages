import { LoadingButton, LoadingButtonProps } from "@mui/lab"

type ButtonProps = LoadingButtonProps

export const Button = ({ children }: ButtonProps) => {
  return (
    <LoadingButton>
      {children}
    </LoadingButton>
  )
}