import React from 'react' 
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGooglesearch';
import Response from './response'
import { Link } from 'react-router-dom';
import './searchPage.css';
import  Search from './components/search' ;
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';




function searchPage () {

    const[{term}, dispatch] = useStateValue() ;
    // live api call
      const {data} = useGoogleSearch(term) ;
       // const data = Response ; 
    console.log(data) 
    return(
        <div className="searchPage">
                    
                 <div className="search_header">
                <Link to="/">
                    <img   className="searchimg" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""  />
                </Link>
                <div className="searchPage_headerbody">
                <Search hideButtons />
                 <div className="searchpage__options"> 
                     <div className="searchpage_optionsleft">
                     <div className="searchpage__option"> 
                     <SearchIcon />
                     <Link to="/all"> ALL</Link>
                     </div>
                     <div className="searchpage__option"> 
                     <DescriptionIcon />
                     <Link to="/all"> News</Link>
                     </div> <div className="searchpage__option"> 
                     <ImageIcon />
                     <Link to="/all"> Images</Link>
                     </div> <div className="searchpage__option"> 
                     <LocalOfferIcon />
                     <Link to="/all"> Shopping</Link>
                     </div> <div className="searchpage__option"> 
                     <RoomIcon />
                     <Link to="/all"> maps</Link>
                     </div>
                     <div className="searchpage__option"> 
                     <MoreVertIcon />
                     <Link to="/all"> more</Link>
                     </div>

                         </div>       
                         <div className="searchpage_optionsright">
                     <div className="searchpage__option"> 
                   
                     <Link to="/all"> settings</Link>
                     </div>
                     <div className="searchpage__option"> 
                
                     <Link to="/all"> tools</Link>
                     </div> 
                     </div>


                   </div>
                  </div>
                 </div>
                        

                {term &&  ( 
                     <div className ="search_results">
                   
                            <p className="searchresultcount"> 
                            about 
                                {data&&data.searchInformation.formattedTotalResults} 
                            results  ({ data&&data.searchInformation.formattedSearchTime}  seconds
                             )for {term} </p>
                             {data&& data.items.map(item => (
                                 <div className='searchpage_result'>
                                        <a href={item.link}> 
                                        
                                        {item.displayLink}
                                        </a>
                                        <a className="searchpage_resulttitle" href={item.link}>
                                            <h2> {item.title}</h2>
                                        </a>
                                        <p className="searchpage_result_snipet">
                                            {item.snippet}
                                        </p>
                                    
                                 </div>
                             ))}
                     </div>
    
                )}

                
        </div>
    )
}
export default searchPage 