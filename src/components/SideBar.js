
import './SideBar.css'
import TopList from './TopList'
import Search from './Search';
import Songs from './Songs';
import TopAlbums from './TopAlbume';
import TopArtists from './TopArtist';
import TopTracks from './TopTrucks';
import Top20Songs from './Top20Songs';
import Position from './Position';
import ArtistSongs from './ArtistSongs';
import Toop100songlast4week from './SortFourWeeks';

function SideBar() {
    return (
        <>
            <div className='homePage'>
                <div className='sidebar'>
                    <div className='sidebar-up'>
                        <div className='logo'>
                            <img src='./photo.png' />
                            <h1>AHM Music</h1>
                        </div>
                        <ul className='sidebar-menu'>
                            <li className='menu'>Home</li>
                            <li className='menu'>Recent</li>
                        </ul>
                    </div>
                    <div className='sidebar-down'>
                        <ul className='sidebar-menu'>
                            <li className='menu'>Albums</li>
                            <li className='menu'>Podcasts</li>
                            <li className='menu'>Favorite</li>
                        </ul>
                        <div className="contact">
                            <i><a href="#" className="fab fa-facebook"></a></i>
                            <i><a href="#" className="fab fa-twitter"></a></i>
                            <i><a href="#" className="fab fa-instagram"></a></i>
                            <i><a href="#" className="fab fa-telegram"></a></i>
                        </div>
                    </div>
                </div>
                <div className='hero'>
                    <div className='searchBar'>
                        <Search />
                    </div>
                    <Songs />
                </div>
            </div>
            {/* <div>
                <TopList />
            </div> */}
            <div className='topListPage'>
                <TopAlbums/>    
                <TopArtists/>
                <TopTracks/>
            </div>
            <Top20Songs />
           
            <div className='sortpage'>
                <Toop100songlast4week month={6}/>
            </div>
            <div>
                <ArtistSongs/>
            </div>
        </>
        
    );

}

export default SideBar;