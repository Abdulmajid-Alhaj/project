import React, { useState } from 'react';
import './TopList.css'
import TopAlbums from './TopAlbume';
// import TopArtists from './TopArtist'
import TopTracks from './TopTrucks';
import Toop100songlast4week from './SortFourWeeks';

function TopList() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [artistsSubMenuOpen, setArtistsSubMenuOpen] = useState(false);
  const [tracksSubMenuOpen, setTracksSubMenuOpen] = useState(false);
  const [albumsSubMenuOpen, setAlbumsSubMenuOpen] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  //   setShowDropdown(false);
  // };

  const handleArtistsSubMenuToggle = () => {
    setArtistsSubMenuOpen(!artistsSubMenuOpen);
    setTracksSubMenuOpen(false);
    setAlbumsSubMenuOpen(false);
  };

  const handleTracksSubMenuToggle = () => {
    setTracksSubMenuOpen(!tracksSubMenuOpen);
    setArtistsSubMenuOpen(false);
    setAlbumsSubMenuOpen(false);
  };

  const handleAlbumsSubMenuToggle = () => {
    setAlbumsSubMenuOpen(!albumsSubMenuOpen);
    setArtistsSubMenuOpen(false);
    setTracksSubMenuOpen(false);
  };

  return (
    <div>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={handleToggleDropdown}>
          {selectedOption ? selectedOption : 'Top List'}
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <p onClick={handleArtistsSubMenuToggle}>Top Artists</p>
            {artistsSubMenuOpen && (
              <div className="sub-menu-items">
               <Toop100songlast4week month={4} /> 
              </div>
            )}
            <p onClick={handleTracksSubMenuToggle}>Top Tracks</p>
            {tracksSubMenuOpen && (
              <div className="sub-menu-items">
                <TopTracks />
              </div>
            )}
            <div className="sub-menu">
              <p onClick={handleAlbumsSubMenuToggle}>Top Albums</p>
              {albumsSubMenuOpen && (
                <div className="sub-menu-items">
                  <opArtist />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopList;