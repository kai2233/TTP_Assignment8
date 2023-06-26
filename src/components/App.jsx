import React, { useEffect,useState} from "react";
import GifCard from "./GifCard";
import axios from "axios";
const APP =(props)=> {
    const [searchState, setSearchState] = useState ([]) 

    const fetchInfoTrending = () =>{
        async function fetchInfo(){            
            const result = await axios(`https://api.giphy.com/v1/gifs/trending`,
            {
            params:{
                api_key: 'p4GoO42jFtrsOyZRRcqP66W7SNXGjRVI'
            }
            });
            setSearchState(result.data.data);
        }
        fetchInfo();
    }
    
    const fetchInfoRandom =()=>{
        async function fetchInfo(){            
            const result = await axios(`https://api.giphy.com/v1/gifs/random`,
            {
            params:{
                api_key: 'p4GoO42jFtrsOyZRRcqP66W7SNXGjRVI',
                // tag: 'burrito'
                tag: props.searchInfo
            }
            });
            setSearchState(result.data.data.images.original.url);
        }
        fetchInfo();
    }

    const fetchInfoSearch=()=>{
        async function fetchInfo(){            
            const result = await axios(`https://api.giphy.com/v1/gifs/search`,
            {
            params:{
                api_key: 'p4GoO42jFtrsOyZRRcqP66W7SNXGjRVI',
                q: props.searchInfo
            }
            });
            setSearchState(result.data.data);
        }
        fetchInfo();
    }
    console.log(searchState);
    return(
    
    <div>
        <button onClick={fetchInfoSearch}> Search </button> 
        <button onClick={fetchInfoRandom}> Random </button> 
        <button onClick={fetchInfoTrending}>Click to View Trending </button>  
        <br></br>
        <GifCard gifDisplay={searchState} />
    </div>
    );
   

}
export default APP;