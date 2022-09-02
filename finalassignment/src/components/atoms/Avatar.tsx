import React from 'react';
import { AvatarProps, Avatar } from "@mui/material";

interface AvatarComponentPropsType extends AvatarProps {
  label?: string;
}

const AvatarComponent = (props: AvatarComponentPropsType) => {
  const { src, variant, label } = props;
  return (
    <div>
      <Avatar src={src} sx={{ background: "#69A6E3", color:'#fff' }} variant={variant}>
        {label}
      </Avatar>
    </div>
  );
};

export default AvatarComponent;
