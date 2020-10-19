import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './components/events/events/Events';

export class App extends React.Component {
  
  public render() {
    return(
      <React.Fragment>
        <Events/>
      </React.Fragment>
    );
  };
};