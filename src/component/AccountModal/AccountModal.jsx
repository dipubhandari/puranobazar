import React, { useState } from 'react'
import { useEffect } from 'react'
import './loginsignupstyle.css'

const AccountModal = (props) => {
    // login or signup modal show

    const [isLogin, setIslogin] = useState(props.hide)
     
    // login or signup show 

    const [isCreateAccount, setisCreateAccounted] = useState(true)
    console.log(props.hide)
    console.log(props.show(isLogin))



    if (isLogin) {
        console.log(props)
        return (<div className='modal'>

            <div className="close" onClick={() => {
                setIslogin(false)
            }}>
                close
            </div>
            {
                (!(isCreateAccount)) ?
                    <div className="formarea">
                        <h4>Login Purano Bazar</h4>
                        <form action="" className='form'>
                            <input
                                type="text"
                                className="value"
                                placeholder='Enter email'
                            />
                            <input
                                placeholder='Enter password'
                                type="text"
                                className="value"
                            />
                            <h4 className=''>Login</h4>
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
                        <form action="" className='form'>
                            <input
                                type="text"
                                className="value"
                                placeholder='Enter fullname'
                            />
                            <input
                                type="text"
                                className="value"
                                placeholder='Enter email'
                            />
                            <input
                                placeholder='Enter password'
                                type="text"
                                className="value"
                            />
                            <h4 className=''>Send</h4>
                            <span className='login-sign' onClick={() => { setisCreateAccounted(false) }}>Login</span>
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