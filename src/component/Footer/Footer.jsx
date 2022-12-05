import React from "react";
import './footer.css'

const Footer = () => {
    function DELETE() {
     localStorage.removeItem('user')
    }
    return (
        <div className="footer">
            <footer>
                <span>@dipubhandari &#169; 2022</span>
                <input type="button" className="lo" value='Exit' />
            </footer>
        </div>
        
    );
};
export default Footer;
