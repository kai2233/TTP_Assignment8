

const GifCard = (props) =>{
    if(typeof props.gifDisplay === 'object'){
    return(        
        <div>
            {props.gifDisplay.map(gif=>{
                return <img key={gif.url} src={gif.images.fixed_height.url}/>
            })}  
        </div>
    );}
    else{
        return(
            <img src={props.gifDisplay}/>
        )
    }
}
export default GifCard;