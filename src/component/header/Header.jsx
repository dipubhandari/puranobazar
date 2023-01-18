import React, { useEffect, useRef, useState } from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import logo from '../../pb.png'
import { Link } from 'react-router-dom'
import SellIcon from '@mui/icons-material/Sell';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountModal from '../AccountModal/AccountModal';

import axios from 'axios'

const Header = (props) => {
    //    state for checking user is login or not
    const [isLoggedIn, setisLoggedIn] = useState(false)
    let user_name = JSON.parse(localStorage.getItem('user'))
    if (user_name) {
        user_name = user_name.name
    }

    // check if user clicked for loin
    const [isLoginClicked, setLoginClick] = useState(false)
    // setting the  lift from
    function show(value) {
        setLoginClick(value);
    }


    //  getting the search word from user
    let search = useRef(null)
    const searchClick = function () {
        // calling the function from props from app parent comoponent
        const data = search.current.value
        props.search(data)
        // search.current.value = data 
    }
    // getting the search word from user

    // checking if the useris logeed in or not
    // checking if the useris logeed in or not


    // this function runs on load and check is user is logged in or not
    useEffect(() => {
        const checkLogged = async () => {
            //  getting user details from localstorage
            const user = JSON.parse(localStorage.getItem('user'))
            // checking the user details to the database
            await axios.post('/checkuser', user)
                .then((response) => {
                    setisLoggedIn(response.data)
                })
        }
        checkLogged()
    }, [])
    // checking if the useris logeed in or not
    // checking if the useris logeed in or not


    // check if user clicked on sell btn user logged in or not if logged in show sell page else redirect to login

    function check() {
        if (!isLoggedIn) {
            setLoginClick(true)
        }
    }

    return (
        <React.Fragment>
            <div className='header'>
                <Link to='/' className="logo">
                    <img src={logo} width='100px' alt="" />
                </Link>

                <div className="searchfield">

                    <input type="text" className='searchinput'
                        ref={search} placeholder='Find mobiles/bikes/laptops/...' />
                    <section className="searchIcon" onClick={searchClick}>
                        <button className='search'> <SearchIcon /> </button>
                    </section>

                </div>

                <div className='hello'>

                    <div id="user">

                        {/* if user is logged in show his name and welcome else show login button */}
                        {
                            (isLoggedIn) ?
                                <span className="login hello">Welcome, {user_name}</span> :
                                < b className="login hello"
                                    onClick={show}
                                > <h4>Login</h4></b>}
                        <div className="order" onClick={check}>
                            <Link to='/selling' className='hello'>   <span><CurrencyRupeeIcon /> </span><b>SELL</b>
                            </Link>
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