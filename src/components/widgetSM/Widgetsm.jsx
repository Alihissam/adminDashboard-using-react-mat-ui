import React from 'react'
import './widgetsm.css'
import hissam from '../../images/hissam.jpg'
import { MdVisibility } from 'react-icons/md';

const Widgetsm = () => {
    return (
        <div className="widgetsm">
            <span className="widgetsmTitle">New Joinners</span>
            <ul className="widgetsmList">
                <li className="widgetsmlistitem">
                    <img src={hissam} alt="hissam" className="widgetsmimg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Hissam Ali</span>
                        <span className="widgetsmUsertitle">Front-End Engineer</span>
                    </div>
                    <button className="widgetsmbutton">
                        <MdVisibility className="widgetsm_icon" />  <span className="display_sign"> Display </span>
                    </button>
                </li>
            </ul>
            <ul className="widgetsmList">
                <li className="widgetsmlistitem">
                    <img src={hissam} alt="hissam" className="widgetsmimg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Hissam Ali</span>
                        <span className="widgetsmUsertitle">Front-End Engineer</span>
                    </div>
                    <button className="widgetsmbutton">
                        <MdVisibility className="widgetsm_icon" />  <span className="display_sign"> Display </span>
                    </button>
                </li>
            </ul>
            <ul className="widgetsmList">
                <li className="widgetsmlistitem">
                    <img src={hissam} alt="hissam" className="widgetsmimg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Hissam Ali</span>
                        <span className="widgetsmUsertitle">Front-End Engineer</span>
                    </div>
                    <button className="widgetsmbutton">
                        <MdVisibility className="widgetsm_icon" />  <span className="display_sign"> Display </span>
                    </button>
                </li>
            </ul>
            <ul className="widgetsmList">
                <li className="widgetsmlistitem">
                    <img src={hissam} alt="hissam" className="widgetsmimg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Hissam Ali</span>
                        <span className="widgetsmUsertitle">Front-End Engineer</span>
                    </div>
                    <button className="widgetsmbutton">
                        <MdVisibility className="widgetsm_icon" />  <span className="display_sign"> Display </span>
                    </button>
                </li>
            </ul>
            <ul className="widgetsmList">
                <li className="widgetsmlistitem">
                    <img src={hissam} alt="hissam" className="widgetsmimg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Hissam Ali</span>
                        <span className="widgetsmUsertitle">Front-End Engineer</span>
                    </div>
                    <button className="widgetsmbutton">
                        <MdVisibility className="widgetsm_icon" /> <span className="display_sign"> Display </span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Widgetsm
