import React from 'react' ;
import './home.css'
import {Link} from 'react-router-dom' ;
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import  Search from '../components/search' ;
function Home() {
    return(

        <div className="home"> 
          

            <div className="home__header">
                <div className="home__headerleft">
                    <Link to='/about'> About </Link>
                    <Link to='/store'> Store </Link>

                </div>

                
                <div className="home__headerright">
                <Link to='/gmail'> Gmail </Link>
                <Link to='/images'> Images </Link>
                <AppsIcon />
                <Avatar/>

                </div>
            </div>

          <div className="home__body">
              <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />

                <div className="home_inputcontainer">
                <Search  />
                </div>

          </div>
         </div>
    )
}

export default Home ; 