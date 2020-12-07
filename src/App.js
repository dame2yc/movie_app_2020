import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    isLoading: true,
    movies:[],
  }
  getmovies=async()=>{
    const movies =await axios.get('https://yts-proxy.now.sh/list_movies.json');
  }
  componentDidMount(){
    //영화데이터 로딩!
    this.getmovies();
    
  }
  render() {
    const {isLoading} = this.state;
    
    return <div>{isLoading? 'Loading...':'We are Ready'}</div>;
  }
}

export default App;
