import React from 'react';
import './Container.css';
import Instrument from '../Instrument';

// main container for each Instrument component
// loops through each index in props.Instruments, which contains an array of Instrument images
// to create a new Instrument component for each image
// attaches the passed down clickEvent function to each Instrument component
const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.Instruments.map((a, i) => <Instrument name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;