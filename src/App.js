import './App.css';
import React from 'react';
import defaultDataset from './dataset';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answers:[],
      chats: [],
      currentID: "init",
      dataset: defaultDataset,
      open: false
    }
  }
  render(){
  return (
    <div>
 
    </div>
  );
}
}
