import React from 'react';
import axios from 'axios';

const REST_URL = "http://localhost:8000"

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }

  exampleGetRequestAcrossCORS(e) {
    console.log("Making request to URL")
    axios.get(`${REST_URL}/channels`)
      .then((res)=> {
        console.log("Received response", res);
        console.log("Click event", e);
      })
      .catch(err => {
        console.log('Error in request ', err);
      })
  }

  clickHandler(e) {
    this.exampleGetRequestAcrossCORS(e);
  }

  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="eight wide column">
            Hello World
          </div>
          <div className="eight wide column">
            Again, Hello World
            <button className="ui button" onClick={this.clickHandler}>
              Follow
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App