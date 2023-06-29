import React from 'react'
import { Link } from 'react-router-dom'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CurrencyYenOutlinedIcon from '@mui/icons-material/CurrencyYenOutlined';

import { Avatar  , Typography} from '@mui/material'
import icon from '../images/cryptocurrency.png'
import {MenuList, MenuItem   ,ListItemIcon ,ListItemText } from '@mui/material';



const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
        <Avatar alt="Remy Sharp" src={icon}  />
        <Typography variant="p" >
            <Link to='./'>CoinFlex</Link>
        </Typography>

        </div>

        <MenuList className="dark">

        <MenuItem>

           <ListItemIcon>
           <HomeOutlinedIcon/>
            </ListItemIcon>
            <Link to='./'> <ListItemText sx={{color:'white'}}>Home</ListItemText></Link>
           
            
        </MenuItem>
        <MenuItem>

           <ListItemIcon>
           <CurrencyYenOutlinedIcon/>
            </ListItemIcon>
            <Link to='./cryptocurrencies'> <ListItemText sx={{color:'white'}}>Cryptocurrencies</ListItemText></Link>
           
            
        </MenuItem>
        <MenuItem>

           <ListItemIcon>
           <AutoGraphOutlinedIcon/>
            </ListItemIcon>
            <Link to='./exchanges'> <ListItemText sx={{color:'white'}}>Exchange</ListItemText></Link>
           
            
        </MenuItem>
        <MenuItem>

           <ListItemIcon>
           <LightbulbOutlinedIcon/>
            </ListItemIcon>
            <Link to='./news'> <ListItemText sx={{color:'white'}}>News</ListItemText></Link>
           
            
        </MenuItem>

        
        




        </MenuList>
    </div>
  )
}

export default Navbar