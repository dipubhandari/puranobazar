import React, { useEffect, useState } from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import logo from '../../pb.png'
import { Link } from 'react-router-dom'
import SellIcon from '@mui/icons-material/Sell';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'; 
import AccountModal from '../AccountModal/AccountModal';

const Header = () => {
    //    state for checking user is login or not
    const [isLoggedIn, setisLoggedIn] = useState(false)
    // check if user clicked for loin
    const [isLoginClicked, setLoginClick] = useState(false)
    // setting the  lift from
    function show(value) {
        setLoginClick(value); 
    }
   

    return (
        <React.Fragment>
            <div className='header'>
                <Link to='/' className="logo">
                    <img src={logo} width='100px' alt="" />
                </Link>

                <div className="searchfield">

                    <input type="text" className='searchinput' placeholder='Find mobiles/bikes/laptops/...' />
                    <section className="searchIcon">
                        <button className='search'> <SearchIcon /> </button>
                    </section>

                </div>

                <div className='hello'>

                    <div id="user">

                        {/* if user is logged in show his name and welcome else show login button */}
                        {
                            (isLoggedIn) ?
                                <span className="login hello">Welcome,user</span> :
                                < button className="login hello"
                                    onClick={show}
                                > <h4>Login</h4></button>}
                        <div className="order">
                            <span><CurrencyRupeeIcon /> </span><b><Link to='/orders' className='hello'>SELL</Link> </b>
                        </div>
                    </div>
                </div>

            </div >
            {(isLoginClicked) ?
                <div className="account-modal">
                    <AccountModal show={show} hide={isLoginClicked} />
                </div> : null
            }

        </React.Fragment>

    )
}

export default Header