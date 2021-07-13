import React from 'react'
import glogo from '../images/googlelogo.png'
import SearchIcon from "@material-ui/icons/Search";
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import './Search.css'
import { Button } from '@material-ui/core';

function Search() {
    return (
        <div className="search_main">
            <div className ="search__logo" >
            <img  src={glogo} alt="google" />
            </div>
            <div className="search_input">
                <SearchIcon className="search_Btnsearch"/>
                <input className="search_find" placeholder="type anything!"></input>
                <KeyboardVoiceIcon className="search_voice"/>
                </div>
                <div >
                <Button className="search_buttons" variant="contained">Google Search</Button>
                <Button className="search_buttons"variant="contained">I'm Feeling Luckey</Button>
                    </div>
        </div>
    )
}

export default Search
