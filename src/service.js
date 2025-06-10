



//YOUTUBE FETCH  

const API_KEY = 'AIzaSyDnvg-YzLKUqsDRbVznZ2O3ScKrWA48xWY';
const PLAYLIST_ID = 'UUpGQ3gam2WEVyXsaeyNXZKA'; // Example: UUxxxxxxx


  const [videos, setVideos] = useState([]);

  console.log(videos);
  
  useEffect(() => {
    async function fetchAllVideos() {
      let nextPageToken = '';
      let allVideos = [];


      try {
        do {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}&pageToken=${nextPageToken}`
        );
        const data = await response.json();
        
        if (data.items) {
            allVideos = [...allVideos, ...data.items];
          }
          
          nextPageToken = data.nextPageToken;
        } while (nextPageToken);
        setVideos(allVideos);

      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }

    // fetchAllVideos();
  }, []);