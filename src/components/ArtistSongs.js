import React, { useState } from 'react'
import Top20Songs from './Top20Songs'
import Position from './Position'

function ArtistSongs() {
    const [artist,setArtist]= useState()
    const [data,setData]= useState()
        
    
    function handleClick(){
        console.log(Top20Songs(artist));
        setData(Top20Songs(artist))
    }
  return (
    <div className='searchInput'>
      <input type='text' value={artist} onChange={e=>setArtist(e.target.value)}/>
      <button onClick={handleClick}>Search</button>
      <ul>
      {
        data ? data.map(
            item =>
            <li key={item} className='searchRes'>{item}</li>
        ) : ""
      }
      </ul>
      <Position artist={artist}/>
    </div>
  )
}

export default ArtistSongs
