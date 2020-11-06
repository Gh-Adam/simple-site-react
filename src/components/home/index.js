import React from 'react';
import About from './../about';
import Footer from './../footer';
import SocialMedia from './../social-media';
import Work from './../work';
import Profile from './../profile';
import Portfolio from './../portfolio';
const Home = () => {
  return (
    <div>
      <Work></Work>
      <Portfolio></Portfolio>
      <Profile></Profile>
      <About></About>
      <SocialMedia></SocialMedia>
      <Footer></Footer>
    </div>
  );
};

export default Home;
