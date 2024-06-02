import { Stack, StackProps } from "@mui/material";

type RowProps = {
  vertical?: 'start' | 'center' | 'end' | 'stretch' | 'baseline',
  horizontal?: 'start' | 'flex-start' | 'center' | 'end' | 'flex-end' | 'spaced' | 'space-between' | 'around' | 'space-around' | 'space-evenly',
  reverse?: boolean;
} & Omit<StackProps, 'useFlexGap' | 'direction' | 'justifyContent' | 'alignItems'>;

export const Row = ({ vertical, horizontal, reverse = false, spacing = 1, width, children, ...muiProps }: RowProps) => (
  <Stack
    width={width || '100%'}
    useFlexGap
    direction={reverse ? 'row-reverse' : 'row'}
    spacing={spacing}
    alignItems={vertical}
    justifyContent={horizontal}
    {...muiProps}
  >
    {children}
  </Stack>
);