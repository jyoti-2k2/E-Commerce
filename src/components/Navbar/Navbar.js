import React, { useState } from 'react'
import {AppBar, Badge, Box, Button, Toolbar, Typography} from "@mui/material"
import logo from "../Assets/logo_big.png"
import "./Navbar.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  const[menu,setMenu] = useState("Shop")
  return (
    <Box  >
        <AppBar position='static'className='navbar' >
            <Toolbar disableGutters className="nav-items" >
                <Box className='logo-container'>
                <img className='logo' src = {logo} alt="logo"/>
                <Typography variant='h6' color='black' className='title'>
                    SHOPPING CENTER
                </Typography>
                </Box>
                <Box>
                <ul className="categories">
                  <li onClick={()=>setMenu("Shop")}>Shop{menu==="Shop"?<hr/>:<></>}</li>
                  <li onClick={()=>setMenu("Men")}>Men{menu==="Men"?<hr/>:<></>}</li>
                  <li onClick={()=>setMenu("Women")}>Women{menu==="Women"?<hr/>:<></>}</li>
                  <li onClick={()=>setMenu("Kid")}>Kid{menu==="Kid"?<hr/>:<></>}</li>
                </ul>
                </Box>
                <Box className="nav-login-cart">
                  <Button variant='outlined'>login</Button>
                  <Badge badgeContent={0} color='error' sx={{fontSize:'50px'}} showZero>
                    <ShoppingCartOutlinedIcon sx={{color:'black'}}/>
                  </Badge>
                  

                </Box>
               
                
            </Toolbar>
           
        </AppBar>

    </Box>
  )
}

export default Navbar