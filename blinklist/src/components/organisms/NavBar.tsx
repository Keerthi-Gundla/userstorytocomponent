import { Grid } from '@mui/material';
import React from 'react';
import ButtonComponent from '../atoms/Button';
import Logo from '../atoms/Logo';
import TypographyComponent from '../atoms/Typography';

interface NavBarProps{
    logo?:string,
    alt?:string
}

const NavBar:React.FC<NavBarProps>=(props)=>{
    const {logo,alt}=props;
    return <Grid container flexDirection="row">
        <Logo source={logo} alt={alt}/>
        {/* search icon */}
        <ButtonComponent variant='text' label={"Explore"}/>
        <TypographyComponent variant="body1">My Library</TypographyComponent>
        <TypographyComponent variant="body1">Highlights</TypographyComponent>
    </Grid>
}

export default NavBar;
