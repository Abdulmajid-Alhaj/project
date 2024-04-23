import data from '../spotify_data.history.json'
function Position({artist}) {
    let obj = {}
    data.map(song => {
        if(song.master_metadata_album_artist_name)
            return obj[song.master_metadata_album_artist_name] = (obj[song.master_metadata_album_artist_name] || 0) + song.ms_played
    })
    let arr = Object.entries(obj).sort((a,b)=> b[1]-a[1])
    arr = arr.map(([item])=> item).slice(0,100)
    let rank= arr.indexOf(artist)+1;
  return(
    <h1 className='searchRes'>{rank}</h1>
  )
}

export default Position
