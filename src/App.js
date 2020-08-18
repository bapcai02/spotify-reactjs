import React,{useEffect,useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse} from './spotify'
import spotifywebapi from 'spotify-web-api-js'

const spotify = new spotifywebapi();

function App() {

  const [token,setToken] = useState(null);

  useEffect(() => {
      const hash = getTokenFromResponse();
      window.location.hash ="";
      const _token = hash.access_token;
      if(_token){
        setToken(_token);
        spotify.setAccessToken(_token);
      }


  }, [])
  return (
    <div className="App">
      {
        token ? (
          <h1>I am login</h1>
        ):(
          <Login/>
        )
      }

      
    </div>
  );
}

export default App;
