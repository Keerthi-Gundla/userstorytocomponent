import React from 'react';
import NavBar from '../organisms/NavBar';

interface BasicTemplateProps{
    children:React.ReactNode
}

const BasicTemplate:React.FC<BasicTemplateProps>=(props)=>{

    const {children}=props;

    return <div>
        <NavBar/>
        {children}
    </div>
}

export default BasicTemplate;
