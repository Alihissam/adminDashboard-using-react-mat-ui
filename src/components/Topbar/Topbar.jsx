import React from 'react'
import './topbar.css'
import ali from '../../images/ali.jpg'
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdLanguage } from 'react-icons/md';
import { MdSettings } from 'react-icons/md';



const Topbar = () => {
    return (
        <>
            <div className="top_section">
                <div className="top_section_wrapper">
                    <div className="top_section_left">
                        <span className="logo">Admin Dashboard</span>
                    </div>
                    <div className="top_section_right">
                        <div className="icon_container">
                            <IoMdNotificationsOutline className="notification_icon" />
                            <span className="topiconbadge">2</span>
                        </div>
                        <div className="icon_container">
                            <MdLanguage className="notification_icon" />
                            <span className="topiconbadge">2</span>
                        </div>
                        <div className="icon_container">
                            <MdSettings className="notification_icon" />
                        </div>
                        <img src={ali} alt="ali" className="avatar_pick" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
