import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import './loginsignupstyle.css'
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountModal = (props) => {


    const [msg, setMsg] = useState('')
    // inputs when user type username email
    const [input, setInput] = useState({})

    // handlechange for signup
    function handleChange(signup_element) {
        const name = signup_element.target.name
        const value = signup_element.target.value
        console.log(input)
        // setting the value in input that user press i
        setInput({ ...input, [name]: value })
    }

    // handlesubmit for signup 

    async function handleSubmit(e) {

        e.preventDefault()
        console.log(input)
        await axios.post('/createaccount', input)
            .then((response) => {
                setMsg(response.data)
                notify(response.data)
                setInput({})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // signup
    // signup
    // lgin
    // lgin


    const [loginmsg, setloginmsg] = useState('')
    const [login, setlogin] = useState({})

    // handlechange for signup


    function handleloginchange(login_element) {
        const name = login_element.target.name
        const value = login_element.target.value
        console.log(login)

        setlogin({ ...login, [name]: value })
    }


    // handlesubmit for signup

    async function loginSend(e) {

        e.preventDefault()

        await axios.post('/login', login)
            .then((response) => {
                // setloginmsg(response.data)

                // setloginmsg(response.data.login_err)
                notify(response.data.login_err)

                const setLocalStorage = localStorage.setItem('user', JSON.stringify(response.data))
                if (!response.data.login_err) {
                    notify('You Are Login!')
                    setTimeout(() => {
                        document.location.reload()

                    }, 1000)

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //    login


    // login or signup modal show

    const [isLogin, setIslogin] = useState(props.hide)

    // login or signup show 

    const [isCreateAccount, setisCreateAccounted] = useState(false)

    props.show(isLogin)
    const notify = (e) => toast(e, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })


    if (isLogin) {

        return (<div className='modal'>

            <div className="close" onClick={() => {
                setIslogin(false)
            }}>
            
                <CloseIcon />
            </div>
            {
                (!(isCreateAccount)) ?
                    <div className="formarea">
                        <h4 className='login-circle'><PersonPinIcon /> <span>Login</span></h4>
                        <span className='msg'>{loginmsg}</span>
                        <form action="" className='form' onSubmit={loginSend}>
                            <input
                                type="text"
                                className="value"
                                onChange={handleloginchange}
                                value={login.email || ''}
                                name='email'
                                placeholder='Enter email'
                            />
                            <input
                                onChange={handleloginchange}
                                placeholder='Enter password'
                                type="text"
                                name='password'
                                className="value"
                                value={login.password || ''}
                            />
                            <input type='submit' value='login' name='login-sign' className='login-sign' /> <span>Or</span>
                            <button className='login-sign' onClick={
                                () => {
                                    // sesisCreateAccounted
                                    setisCreateAccounted(true)
                                    props.changeIsloginClicked(isLogin)
                                }
                            }>Create New Account</button>
                        </form>
                    </div>
                    :

                    <div className="formarea">
                        <h4>Create New Account</h4>
                        <span className='note_err'>{msg}</span>
                        {/* <span className='msg' id='login-msg'>{msg}</span> */}
                        <form action="" className='form'>
                            <input
                                type="text"
                                className="value"
                                onChange={handleChange}
                                name='name'
                                placeholder='Enter fullname'
                                value={input.name || ''}
                            />
                            <input
                                type="text"
                                className="value"
                                onChange={handleChange}
                                placeholder='Enter email'
                                name='email'
                                value={input.email || ''}

                            />
                            <input
                                placeholder='Enter password'
                                onChange={handleChange}
                                value={input.password || ''}
                                name='password'
                                type="text"
                                className="value"
                            />
                            <input type='submit' className='createbtn' name='auth' value='Send' onClick={handleSubmit} />
                            <span className='create login-sign' onClick={() => { setisCreateAccounted(false) }}>Login</span>
                        </form>
                    </div>}

            <div className="new">

            </div>

        </div>
        )
    }
    //  :


    // <div className="sign">

    // </div>}
}

export default AccountModal