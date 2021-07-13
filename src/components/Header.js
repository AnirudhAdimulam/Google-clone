import AppIcon from "@material-ui/icons/Apps";
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import logo from '../images/channelImg.jpg'
import './Header.css'

function Header() {
    return (
        <div className = "header">
            <div className = "header_left">
                 
                  <a className="header_button" href="#" >About</a>
                  <a className="header_button" href="https://store.google.com/DE?utm_source=hp_header&amp;utm_medium=google_ooo&amp;utm_campaign=GS100042&amp;hl=en-DE" ping="/url?sa=t&amp;rct=j&amp;source=webhp&amp;url=https://store.google.com/DE%3Futm_source%3Dhp_header%26utm_medium%3Dgoogle_ooo%26utm_campaign%3DGS100042%26hl%3Den-DE&amp;ved=0ahUKEwjo_9H13rDuAhXG-aQKHSqLDRMQpMwCCAQ">Store</a>
                </div>

                <div className="header_right">
                <a href="https://www.google.com" className="header_button">Gmail</a>
                <a href="#"className="header_button">Images</a>  
                <AppIcon className="header__icon"/>
                <Avatar img src={logo} alt="anirudh"/>
               </div>
        </div>
    )
}

export default Header
