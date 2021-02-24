import React from 'react';
import Row from '../../features/components/Row';
import requests from '../api/requests';
import '../layout/App.css'

function App() {

console.log(requests.fetchNetflixOriginals)

  return (
    
    <div className='App'>
     <Row title='Netflix Top Rated' fetchUrl={requests.fetchTopRated}/>     
     <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
