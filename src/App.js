import React, { Component } from 'react';
import './App.css';

import Quote from './components/Quote';
import Loading from './components/Loading';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      item : [],
      isLoaded: false
    };

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        item:json,
        isLoaded: true
      })
    });
  }


  refresh(){
    window.location.reload();
  }

  render() {

    var {isLoaded} = this.state;

    if(!isLoaded){
      return (<Loading />);
    }
    else{
      return (
      <div className="app">
        <Quote quote ={this.state.item.quote}/>
        <button onClick={this.refresh}>New Tweet</button>
      </div>
      );
    }
  }
}

export default App;
