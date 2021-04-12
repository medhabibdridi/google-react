import React, { useState } from'react' ; 
import './search.css'; 
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import{useStateValue} from "../StateProvider";
import { actionTypes } from '../reducer';

function Search({hideButtons = false}) {
    const [{},dispatch] = useStateValue();
    const[ input, setInput] = useState(""); 
    const history= useHistory();

        const search = e => {
            e.preventDefault();
            console.log('u hit search' , input)

            dispatch({

                type:actionTypes.SET_SEARCH_TERM,
                term:input
            })


            history.push('/search')
        };

return(


    <form className="search">
            <div className="input">
            <SearchIcon className="search_inputicon" />
            <input value={input} onChange={e=> setInput(e.target.value)}/>
            <MicIcon />

            </div>
            {!hideButtons ? (
            <div className="s__buttons">

            <Button type='submit' onClick={search} variant="outlined"> Google Search </Button>
            <Button variant="outlined"> I'm Feeling Lucky </Button>

            </div>
            ):(
                <div className="s__buttons">

                <Button className="hidden" type='submit' onClick={search} variant="outlined"> Google Search </Button>
                <Button className="hidden" variant="outlined"> I'm Feeling Lucky </Button>
                </div>
            )}
    </form>
)

}
export default Search 