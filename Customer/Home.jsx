import React from 'react'
import './Pages.css';
import {Link} from 'react-router-dom'
import CustomizedMenus from './DropDown'
import { AppBar, Toolbar, Tabs, Tab, Typography } from '@mui/material'

export default function Main() {
    document.title="JUST FOOD";
  return (
    <div>
    <AppBar color="transparent">
    <Toolbar>
    <Typography sx={{marginRight: 'auto', color: 'white'}}>
     <Link style={{ textDecoration: 'none', color: 'white'}} to="/Menu">FOOD MENU</Link>
    </Typography>
    <CustomizedMenus/>
    </Toolbar>
    </AppBar>
    <div className="menu">
    <span className='lg'>Welcome to</span><span className='xlg'>JUST FOOD</span>
    <span className='mt'>K-Block, 54, 13th Main Road, Anna Nagar West<br/>Chennai, Tamil Nadu<br/>600029</span>
    </div>
    </div>
  )
}