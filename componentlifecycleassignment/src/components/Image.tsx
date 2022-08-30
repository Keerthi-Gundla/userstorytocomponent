import React from 'react'

interface ImageProps {
  source: string
}

const Image = (props: ImageProps) => {
  return <img src={props.source} alt="person" width="60px" height={"60px"} />
}

export default Image;
