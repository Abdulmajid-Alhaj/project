import data from '../spotify_data.history.json'

function TimeArtistSpned(props) {

    let timeListening=0
    data.map(el => (el.master_metadata_album_artist_name === props.name) ? timeListening += el.ms_played : null)
    return (
        <div>
            <h1>Time Spend Listening</h1>
            <h3>{timeListening}</h3>
        </div>
    )
}

export default TimeArtistSpned
