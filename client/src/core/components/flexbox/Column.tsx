import { Stack, StackProps } from "@mui/material";

type ColumnProps = {
  horizontal?: 'center' | 'start' | 'end' | 'stretch' | 'baseline',
  vertical?: 'start' | 'flex-start' | 'center' | 'end' | 'flex-end' | 'spaced' | 'space-between' | 'around' | 'space-around' | 'space-evenly',
  reverse?: boolean;
} & Omit<StackProps, 'useFlexGap' | 'direction' | 'justifyContent' | 'alignItems'>

export const Column = ({ vertical, horizontal, reverse = false, spacing = 1, width, children, ...muiProps }: ColumnProps) => (
  <Stack
    width={width || '100%'}
    useFlexGap
    direction={reverse ? 'column-reverse' : 'column'}
    spacing={spacing}
    justifyContent={vertical}
    alignItems={horizontal}
    {...muiProps}
  >
    {children}
  </Stack>
)
