import React from 'react';
import './assets/styles/styles.scss';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer'
import { FullPage, Slide } from 'react-full-page';

function App() {
  return (
    <div className="App">
      <FullPage controls={false}>
        <Slide>
          <Header title="Karolina Guzik" subtitle="Front-End Developer" text="I have 3 years of experience working as a Front-End Developer / Web Developer. I worked mainly with WordPress, HTML5, Sass, Bootstrap and JavaScript technologies. For the last year, I have been developing websites for customers as a Freelancer."/>
        </Slide>
        <Slide>
          <Slider title="Selected projects"/>
        </Slide>
        <Footer/>
      </FullPage>
    </div>
  );
}

export default App;

