import data from '../spotify_data.history.json'
function Total (){
    return(
        <div className='total'>
            <h1>Total Songs</h1>
            <h3>{data.length}</h3>
        </div>
    )
}

export default Total;