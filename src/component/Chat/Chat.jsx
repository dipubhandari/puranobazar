import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import React from 'react';
// import Header from '../Header/Header';
import './Chat.css';
// import profile from '../User/people-diet-fit-fitness-preview.jpg'
// 
// import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

function Chat() {
    return (
        <div className="main">


            {/* <Header /> */}

            <div className="chatsection">
                <div className="title">
                 
                    <div className="messages">
                        <div className="firstdata">
                            {/* <img src={profile} alt="" /> */}
                            <span>message here</span>
                        </div>
                        <div className="receiver">

                            <span>message here</span>
                            {/* <img src={profile} alt="" /> */}

                        </div>
                    </div>
                    <div className="sendfield">
                        <input type="text"
                            placeholder='Type a message' />
                        <input type="submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
