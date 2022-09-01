import { Grid } from '@mui/material';
import React from 'react';

interface ExploreProps{
    exploreData:string
}

const Explore:React.FC<ExploreProps>=(props)=>{

    const {exploreData}=props;

    return <Grid>{exploreData}</Grid>
}

export default Explore;
