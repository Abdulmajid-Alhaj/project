import data from '../spotify_data.history.json' ;

function TopTracks() {
    // فرز الأغاني بناءً على وقت الاستماع
    const sortedTracks = data
      .sort((a, b) => b.ms_played - a.ms_played)
      .slice(0, 100);
  
    return (
      <div>
        <h2>Top 100 Tracks</h2>
        <ol>
          {sortedTracks.map((track) => (
            <li key={track._id.$oid}>
              {/* <h5>episode_show_name:</h5> */}
              {track.episode_show_name} - <h5>ms_played :</h5>
              {track.ms_played}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  export default TopTracks;