import data from '../spotify_data.history.json'
function MostHourTimeLisening(){
    let newTime = new Array(24).fill(0)
    data.forEach(element => {
        let newDate = new Date(element.ts)
        let hour = newDate.getUTCHours()
        newTime[hour] += element.ms_played;
    });
    return (
        <div>
            <h1>Most Hour</h1>
            <h3>{newTime.indexOf(Math.max(...newTime))}</h3>
        </div>
    )
}
export default MostHourTimeLisening;