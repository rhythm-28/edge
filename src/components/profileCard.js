import React,{useCookies} from 'react'
import {Avatar} from "@mui/material";
import Photo from "../icons/avatar-4.png";
import { AiOutlineLogout } from "react-icons/ai";
import "../stylesheets/profilecard.css";
function ProfileCard() {

    {/*const [cookies, setCookie, removeCookie, get] = useCookies(["token"]);
    const loggedInToken = cookies.token;
    function logout() {
        removeCookie("token");
        window.location.href = "/login";
      }*/}

    return (
        <div className="profilecard">
            <div className="avatarDiv">
                <div><Avatar  sx={{ width: 56, height: 56 }} src={Photo}/></div>
                <div className="nameDiv">
                <h3>Sierra Ferguson</h3>
                <p>testuser1@gmail.com</p>
                </div>
                
            </div>
            <div className="cardDiv">
                <h3>Company Location</h3>
                <p>Warren and Warren - Bangalore</p>
                <h3>Role</h3>
                <p>System administrator</p>
                <h3>Version</h3>
                <p>2.0.102</p>
                <hr></hr>
                <h3>My profile</h3>
                <p>Warren and Warren - Bangalore</p>
                <p>Warren and Warren - Bangalore</p>
                <p>Warren and Warren - Bangalore</p>
                <p>Warren and Warren - Bangalore</p>
                <div  className="logoutdivv">
                <h2>Logout <AiOutlineLogout  /></h2>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
