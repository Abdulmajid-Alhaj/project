import data from '../spotify_data.history.json'
function Diffrent (){
    let unique = data.map(song => song.master_metadata_track_name)
    let uniqueSong = new Set(unique)
    let count = uniqueSong.size;
    return(
        <>
            <h1>Diffrent Songs</h1>
            <h3>{count}</h3>
        </>
    )
}
export default Diffrent;