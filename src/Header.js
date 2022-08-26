import React, { useState } from 'react'
import './Header.css'
import Search from './Search.js'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link } from "react-router-dom";
import { Button } from '@mui/material';


export default function Header() {
    // const history = useHistory();
    const [showSearch1, setShowSearch1] = useState(false);
    return (
        <div className='header'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
           
            <div className='header__center'>
                {showSearch1 && <Search />}
                <Button onClick={() => setShowSearch1(!showSearch1)} className='header__centerButton1' variant='outlined'>
                    {showSearch1 ? "choose Date" : "Date For Booking"}
                </Button>
                <Button onClick={() => setShowSearch1(!showSearch1)} className='header__centerButton1' variant='outlined'>
                    {showSearch1 ? "choose Guests" : "Add Guest"}</Button>
                <SearchIcon>
                </SearchIcon>
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>
        
    )
}


