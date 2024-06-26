import data from '../spotify_data.history.json'

function TopAlbums() {
    // const data = dataSpotify;
  
    // إنشاء كائن لتجميع بيانات الألبومات
    const albumMap = {};
  
    // حساب وقت الاستماع لكل ألبوم
    data.forEach((track) => {
      const albumName = track.master_metadata_album_album_name;
      const msPlayed = track.ms_played;
  
      if (!albumMap[albumName]) {
        albumMap[albumName] = 0;
      }
      albumMap[albumName] += msPlayed;
    });
  
    // تحويل الكائن إلى مصفوفة من الألبومات
    const albums = Object.keys(albumMap).map((albumName) => ({
      albumName,
      msPlayed: albumMap[albumName],
    }));
  
    // فرز الألبومات بناءً على وقت الاستماع
    const sortedAlbums = albums
      .sort((a, b) => b.msPlayed - a.msPlayed)
      .slice(0, 100);
  
    return (
      <div>
        <h2> Top 100 Albums</h2>
        <ol>
          {sortedAlbums.map((album, index) => (
            <li key={album.albumName}>
               {album.albumName}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  export default TopAlbums;