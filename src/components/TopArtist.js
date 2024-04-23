import data from '../spotify_data.history.json' 

    function TopArtists(){
        function totalPlays(artiestName){
            let count = 0;
            let arr = data.map(ele => (ele.master_metadata_album_artist_name === artiestName)?count++:null)
            return count
        }
        const artists = []
        const result = data.filter( elem => {if(!artists.includes(elem.master_metadata_album_artist_name)&&elem.master_metadata_album_artist_name!==null){
            artists.push(elem.master_metadata_album_artist_name)
        }})
        const totalSongs = artists.map( elem => [elem , totalPlays(elem)])
        const newTotalSongs = totalSongs.sort((a,b) => b[1]-a[1]).slice(0 , 100)
        console.log(newTotalSongs);
        console.log(window)
        
        return(
            <div>
                <h2>Top 100 Artists</h2>
                <ol>
                    <li>
                       {newTotalSongs.map(ele => <li>{ele}</li>)} 
                    </li>
                </ol>
            </div>
        )
    }

  export default TopArtists;