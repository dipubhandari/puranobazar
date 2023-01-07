import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './footer.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const url = useNavigate()
    // const urls = useLocation()

    function DELETE() {
        localStorage.removeItem('user')
        notify()
        setTimeout(() => {
            document.location.reload()
        },2000)
        url('/')

    }

    // react toastify notificatoin

    const notify = () => toast.info('Logout Sucessful !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (
        <div className="footer">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <footer>
                <span>@dipubhandari &#169; 2022</span>
                <input type="button" onClick={DELETE} className="lo" value='Logout' />
            </footer>
        </div>

    );
};
export default Footer;
