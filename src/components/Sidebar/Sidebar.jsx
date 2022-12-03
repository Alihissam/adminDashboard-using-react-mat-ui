import React from 'react'
import './sidebar.css';
import { MdLineStyle } from 'react-icons/md';
import { BiTrendingUp } from 'react-icons/bi';
import { MdTimeline } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import { MdAccountBalance } from 'react-icons/md';
import { BiDollar } from 'react-icons/bi';
import { MdAssessment } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { MdDynamicFeed } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import { BsBagDash } from 'react-icons/bs';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { MdBubbleChart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <section className="sidebar position-sticky">
            <div className="sidebar_wrapper">
                <div className="sidebar_menu">
                    <h4 className="side_title">Dashboard</h4>
                    <ul className="sidebar_item">
                        <Link to="/" className="home-link">
                        <li className="sidebarlist_item active">
                            <MdLineStyle className="sidebar-icon" style={{ color: "rgb(141, 61, 175)" }} />
                            Home
                        </li>
                        </Link>
                        <li className="sidebarlist_item">
                            <MdTimeline className="sidebar-icon" style={{ color: "rgb(229, 214, 138)" }} />
                            Analytics
                        </li>
                        <li className="sidebarlist_item">
                            <BiTrendingUp className="sidebar-icon" style={{ color: "rgb(2, 178, 144)" }} />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar_menu">
                    <h4 className="side_title">Quick Menu</h4>
                    <ul className="sidebar_item">
                        <Link to="/Users" className="link">
                            <li className="sidebarlist_item ">
                                <FaUserPlus className="sidebar-icon" style={{ color: "rgb(232, 189, 13)" }} />
                                Users
                            </li>
                        </Link>
                        <li className="sidebarlist_item">
                            <MdAccountBalance className="sidebar-icon" style={{ color: "rgb(226, 23, 23)" }} />
                            Products
                        </li>
                        <li className="sidebarlist_item">
                            <BiDollar className="sidebar-icon" style={{ color: "rgb(141, 61, 175)" }} />
                            Transaction
                        </li>
                        <li className="sidebarlist_item">
                            <MdAssessment className="sidebar-icon" style={{ color: "rgb(202, 213, 226)" }} />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar_menu">
                    <h4 className="side_title">Notification</h4>
                    <ul className="sidebar_item">
                        <li className="sidebarlist_item">
                            <GrMail className="sidebar-icon" style={{ color: "rgb(50, 100, 90)" }} />
                            Mail
                        </li>
                        <li className="sidebarlist_item">
                            <MdDynamicFeed className="sidebar-icon" style={{ color: "rgb(110, 199, 45);" }} />
                            Feedback
                        </li>
                        <li className="sidebarlist_item">
                            <FiMessageSquare className="sidebar-icon" style={{ color: "rgb(106, 27, 77" }} />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebar_menu">
                    <h4 className="side_title">Staff</h4>
                    <ul className="sidebar_item">
                        <li className="sidebarlist_item">
                            <BsBagDash className="sidebar-icon" style={{ color: "rgb(247, 205, 46)" }} />
                            Manage
                        </li>
                        <li className="sidebarlist_item">
                            <MdBubbleChart className="sidebar-icon" style={{ color: "rgb(224, 124, 36)" }} />
                            Statistics
                        </li>
                        <li className="sidebarlist_item">
                            <MdOutlineReportGmailerrorred className="sidebar-icon" style={{ color: "rgb(224, 59, 139)" }} />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Sidebar
