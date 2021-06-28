import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList } from './components/index';

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

  initAnswers = () => {
    const initDataset = this.state.dataset[this.state.currentID]
    const initAnswers = initDataset.answers;

    this.setState ({
      answers: initAnswers
    })
  }

  componentDidMount() {
    this.initAnswers()
  }

  render(){
  return (
    <section className="c-section">
      <div className="c-box">
        <AnswersList answers={this.state.answers} />
      </div>
    </section>
  );
}
}
