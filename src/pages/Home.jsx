import React from 'react'
import Explore from '../components/Explore';
import Landing from '../components/Landing';
import RecommendedMovies from '../components/RecommendedMovies';
import RecommendedTv from '../components/RecommendedTv';


function Home() {
  return (
    <div>
      <Landing />
      <RecommendedMovies />
      <RecommendedTv />
      <Explore />
    </div>
  );
}

export default Home