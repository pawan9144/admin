import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { logout } from '../redux/action/action';
import {useNavigate} from "react-router-dom"

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlelogout = ()=>{
    dispatch(logout())
    navigate("/")
  } 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <img src='' alt="xyz"/>
         
          <Link to="/dash"> 
          <Button color="inherit">Dashboard</Button>
          </Link>
         
          </Typography>
          <Button color="inherit"  onClick={handlelogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;