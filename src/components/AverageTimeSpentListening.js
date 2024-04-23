import data from '../spotify_data.history.json'
function AverageTimeSpentListening(){
    //To filter non slipped songs
    let nonSkippedSong = data.filter(elem => elem.skipped !== true)
    //To divide history
    let dailyAverage = data.map(elem => elem.ts.slice(0,10)) 
    //To add the number of days
    let totalDays = [];
    dailyAverage.map(elem => (!totalDays.includes(elem) ? totalDays.push(elem) : null));
    //To calculate the time spend listening
    let msNonSkippedSongs = nonSkippedSong.map(time => time.ms_played)
    let totalMsPlaysNonSkipped = msNonSkippedSongs.reduce((curr,act) => curr + act, 0);
    return(
        <div>
            <h1>Daily Average</h1>
            <h3>{Math.trunc((totalMsPlaysNonSkipped / 1000) / totalDays.length)}</h3>
        </div>
    )
}
export default AverageTimeSpentListening;