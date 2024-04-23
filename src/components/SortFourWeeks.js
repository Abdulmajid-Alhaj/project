import data from '../spotify_data.history.json'


const Toop100songlast4week = (props) => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - props.month);
  
    const topSongs = data
      .filter(song => new Date(song.ts) >= sixMonthsAgo)

  
     const topSongs2= topSongs.sort((a, b) => b.ms_played - a.ms_played).slice(0, 10);
  
    return (
      <div>
        <h2>أعلى 10 أغاني حسب وقت الاستماع في {props.month} الأشهر الأخيرة</h2>
        <table>
          <thead>
            <tr>
              <th>اسم الأغنية</th>
              <th> تاريخ الاغنيةة</th>
              <th>اسم الألبوم</th>
              <th> وقت الاستماع</th>
            </tr>
          </thead>
          <tbody>
            {topSongs2.map((song, index) => (
              <tr key={index}>
                <td>{song.master_metadata_track_name || "Hiba"}</td>
                <td>{song.ts}</td>
                <td>{song.master_metadata_album_album_name}</td>
                <td>{song.ms_played}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export  default Toop100songlast4week;