import React from 'react';

interface ImageProps{
    source?:string,
    alt?:string
}

const Image:React.FC<ImageProps>=(props)=>{

    const {source,alt}=props;

    return <img src={source} alt={alt}/>
}

export default Image;
