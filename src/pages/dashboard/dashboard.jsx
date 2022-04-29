import {Grid} from '@mui/material'
import React from 'react'
import OutlinedCard from "../../card/card"

const Dashboard = () => {
 
  return (
    <>


    
<Grid container spacing={2}>
  <Grid item xs={3}>
  <OutlinedCard/>
  </Grid>

</Grid>
    </>
  )
}

export default Dashboard