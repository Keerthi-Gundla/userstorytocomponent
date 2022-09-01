import React from 'react';

interface LogoProps{
    source?:string
    alt?:string
}

const Logo:React.FC<LogoProps> =(props)=>{

    const {source,alt}=props;

    return <div>
            <img src={source} alt={alt}/>
        </div>
}

export default Logo;
