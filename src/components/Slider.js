import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import LinkInList from './LinkInList';
import projects from '../data/projects.json';

const slider = (
  <AwesomeSlider animation="cubeAnimation" bullets={false} >
    {projects.map( project => 
      <div className="slider__single-slide" key={project.id}>
        <img className="slider__single-slide--image" src={require('../assets/images' + project.imgUrl)} alt={project.name} key={project.id}/>
        <ul className="slider__single-slide--list">
          <LinkInList link={project.linkLive} title="Live"/>
          {project.linkGithub ? <LinkInList link={project.linkGithub} title="Github"/> : '' }
        </ul>
      </div>
    )}
  </AwesomeSlider>
);

function Slider(props){
  return (
    <div className="slider">
      <h3>{props.title}</h3>
      {slider}
    </div>
  )
}

export default Slider;

