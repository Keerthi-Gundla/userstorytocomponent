import React from 'react';

interface BookThumbnailProps {
    src ?: string;
}

const BookThumbnail:React.FC<BookThumbnailProps> = (props)=>{
    return <div>
        <img src={props.src} alt="book thumb nail"/>
    </div>
}

export default BookThumbnail;
