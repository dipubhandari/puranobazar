import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './footer.css'

const Footer = () => {

    const url = useLocation()

    function DELETE() {

        url.push('/')
        localStorage.removeItem('user')
    }

    return (
        <div className="footer">
            <footer>
                <span>@dipubhandari &#169; 2022</span>
                <input type="button" onClick={DELETE} className="lo" value='Exit' />
            </footer>
        </div>

    );
};
export default Footer;
