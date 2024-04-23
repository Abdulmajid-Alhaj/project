import data from '../spotify_data.history.json'
function Time (){
    let timer = data.map(time => time.ms_played)
    let time = timer.reduce((curr,act) => curr + act ,0)
    return(
        <div>
            <h1>Listening Time</h1>
            <h2>{Math.trunc(time / 1000)} S</h2>
            {/* <h3>{Math.trunc((time / 1000) / 60)} M</h3> */}
            {/* <h3>{Math.trunc(((time / 1000) / 60) / 60)} H</h3> */}
        </div>
    )
}
export default Time
