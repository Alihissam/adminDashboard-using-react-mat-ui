import React from 'react'
import './newUser.css';

const NewUser = () => {
    return (
        <div className="NewUser">
            <h1 className="nweUserTitle">New User</h1>
            <form className="newuserform">
                <div className="newuseritem">
                    <label>Username</label>
                    <input type="text" placeholder="Hissam" />
                </div>
                <div className="newuseritem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Hissam Ali" />
                </div>
                <div className="newuseritem">
                    <label>Email</label>
                    <input type="emai" placeholder="hissam@gmailcom" />
                </div>
                <div className="newuseritem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newuseritem">
                    <label>Phone</label>
                    <input type="text" placeholder="0522674170" />
                </div>
                <div className="newuseritem">
                    <label>Address</label>
                    <input type="text" placeholder="UAE | Dubai" />
                </div>
                <div className="newuseritem">
                    <label>Gender</label>
                    <div className="newusergender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newuseritem">
                    <label className="">Active</label>
                    <select name="active" id="active" className="newsuerSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newuserbutton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
