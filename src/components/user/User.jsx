import React from 'react'
import './User.css';
import { Link } from 'react-router-dom'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { CalendarToday, LocationSearching, MailOutline, PhoneAndroid, Publish } from '@material-ui/icons';

const User = () => {
    return (
        <div className="User">
            <div className="userTitleContainer">
                <h1 className="userTitel">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="usercontainer">
                <div className="userShow">
                    <div className="usershowtop">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKWvCw9r5xFhAG4Olc-NQUcu7jo9Fe70RaQ&usqp=CAU" alt="" className="usershowImg" />
                        <div className="usershowToptitle">
                            <span className="usershowusername">Hissam Ali</span>
                            <span className="usershowsuertitle">Web Developer</span>
                        </div>
                    </div>
                    <div className="usershowBottom">
                        <span className="usershowtitle">Account Details</span>
                        <div className="usershowinfo">
                            <PermIdentityIcon className="usershowicon" />
                            <span className="usershowinfotitle">HissamAli</span>
                        </div>
                        <div className="usershowinfo">
                            <CalendarToday className="usershowicon" />
                            <span className="usershowinfotitle">10.12.1997</span>
                        </div>
                        <span className="usershowtitle">Contact Details</span>
                        <div className="usershowinfo">
                            <PhoneAndroid className="usershowicon" />
                            <span className="usershowinfotitle">0522674170</span>
                        </div>
                        <div className="usershowinfo">
                            <MailOutline className="usershowicon" />
                            <span className="usershowinfotitle">Hissam@gmail.com</span>
                        </div>
                        <div className="usershowinfo">
                            <LocationSearching className="usershowicon" />
                            <span className="usershowinfotitle">Dubai | UAE</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="UserupdateTitle">Edit</span>
                    <form className="userupdateform">
                        <div className="userupdatleft">
                            <div className="userupdateitem">
                                <label>UserName</label>
                                <input type="text"
                                    placeholder="HissamAli"
                                    className="userupdateinput" />
                            </div>
                            <div className="userupdateitem">
                                <label>Full Name</label>
                                <input type="text"
                                    placeholder="HissamAli"
                                    className="userupdateinput" />
                            </div>
                            <div className="userupdateitem">
                                <label>Phone</label>
                                <input type="text"
                                    placeholder="0522674170"
                                    className="userupdateinput" />
                            </div>
                            <div className="userupdateitem">
                                <label>Email</label>
                                <input type="text"
                                    placeholder="Hissam@gmail.com"
                                    className="userupdateinput" />
                            </div>
                            <div className="userupdateitem">
                                <label>Address</label>
                                <input type="text"
                                    placeholder="Dubai | UAE"
                                    className="userupdateinput" />
                            </div>
                        </div>
                        <div className="userupdateright">
                            <div className="userupdateupload">
                                <img className="userupdateimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKWvCw9r5xFhAG4Olc-NQUcu7jo9Fe70RaQ&usqp=CAU" />
                                <label htmlFor="file"><Publish className="updateicon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userupdatebutton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
