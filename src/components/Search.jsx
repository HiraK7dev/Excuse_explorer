import React from 'react';
import "./Search.css";

function Search(props){
    return(
        <div id='search'>
            <select id='opt'>
                <option value="office">Office</option>
                <option value="college">College</option>
                <option value="party">Party</option>
                <option value="unbelievable">Unbelievable</option>
                <option value="developers">Developers</option>
                <option value="gaming">Gaming</option>
            </select>
            <button id='getButton' onClick={props.action}>GET EXCUSES</button>
        </div>
    )
}

export default Search