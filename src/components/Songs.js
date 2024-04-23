import './Songs.css'
import Diffrent from './Diffrent'
import Total from './Total'
import Time from './Time'
import AverageTimeSpentListening from './AverageTimeSpentListening'
import MostHourTimeLisening from './MostHourTimeListening'
import ArtistTotal from './ArtistTotal'
import DiffrentArtistTrack from './DiffrentArtistTrack'
import TimeArtistSpned from './TimeArtistSpned'
import PercentageArtist from './PercentageArtist'
import MostSeasonListeningArtest from './MostSeasonListeningArtest'
import MostPlayedSeason from './MostPlayedSeason'

function Songs(){

    return(
        <div className='songscards'>
            <div className='cards'>
                <div className = 'card'>
                    <Total />
                </div>
                <div className = 'card'>
                    <Diffrent />
                </div>
                <div className = 'card'>
                    <Time />
                </div>
                <div className = 'card'>
                    <AverageTimeSpentListening />
                </div>
            </div> 
            <div className='cards'>
                <div className = 'card'>
                    <MostHourTimeLisening />
                </div>
                <div className = 'card'>
                    <MostPlayedSeason />
                </div>
                <div className = 'card'>
                    <ArtistTotal name = {"Saba"}/>
                </div>
                <div className = 'card'>
                    <DiffrentArtistTrack  name = {"Saba"}/>
                </div>
            </div> 
            <div className='cards'>
                <div className = 'card'>
                    <TimeArtistSpned  name = {"Saba"}/>
                </div>
                <div className = 'card'>
                    <PercentageArtist name = {"Saba"}/>
                </div>
                <div className = 'card'>
                    <MostSeasonListeningArtest name = {"Saba"}/>
                </div>
            </div> 
        </div>
    )
}

export default Songs;