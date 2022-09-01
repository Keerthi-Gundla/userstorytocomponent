
import React from 'react';

import { Typography, TypographyProps } from '@mui/material'

interface TypographyComponentProps extends TypographyProps {
  children?: string
}

const TypographyComponent = (props:TypographyComponentProps) => {
  const {
    children,
    variant,
    ...rest
  } = props
  return (
    <div>
      <Typography
        variant={variant}
        {...rest}
      >
        {children}
      </Typography>
    </div>
  )
}

export default TypographyComponent;
