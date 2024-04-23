import data from '../spotify_data.history.json'
function Top20Songs(artist) {
    let obj = {}
    let filterdData = data.filter(song => song.master_metadata_album_artist_name === artist)
    filterdData.map(song => {
        obj[song.master_metadata_track_name] = (obj[song.master_metadata_track_name] || 0) + song.ms_played
    })
    let arr = Object.entries(obj).sort((a,b)=> b[1]-a[1])
    arr = arr.map(([item])=> item).slice(0,20)
    return arr
}

export default Top20Songs