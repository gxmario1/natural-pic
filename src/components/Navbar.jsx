import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'



function Navbar() {
  return (
    <Grid container justifyContent='center' spacing={1} style={{backgroundColor: '#43a047', textDecoration: 'none', padding: '1rem 0'}}>
      <Grid item>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link> 
      </Grid>
      <Grid item style={{color: 'white'}}>
        |
      </Grid>
      <Grid item>
        <Link to='/favs' style={{textDecoration: 'none', color: 'white'}}>Favoritos</Link>
      </Grid>
    </Grid>
  )
}

export default Navbar
 