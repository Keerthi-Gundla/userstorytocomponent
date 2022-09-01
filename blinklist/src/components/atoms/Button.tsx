import { Button, ButtonProps } from '@mui/material';
import React from 'react';

interface ButtonComponentProps extends ButtonProps{
    label?:String
}

const ButtonComponent:React.FC<ButtonComponentProps>=(props)=>{

    const {label, ...rest}=props;
    return <Button  {...rest} >{label}</Button>
}

export default ButtonComponent;
