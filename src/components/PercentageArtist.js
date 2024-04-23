import React from 'react'
import data from '../spotify_data.history.json'
function PercentageArtist(props) {
    let newArtist = 0;
    data.map(elem => elem.master_metadata_album_artist_name===props.name ? newArtist++ : null)
    let total = data.length;
return (
    <div>
        <h2>Percentage of the plays</h2>
        <h1>{props.name}</h1>
        <h3>{((newArtist * 100) / total).toPrecision(2)} %</h3>
    </div>
)
}

export default PercentageArtist
