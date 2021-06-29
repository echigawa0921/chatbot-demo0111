import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';

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

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentID]
    const chat = {
      text: initDataset.question,
      type: 'question',
    }

    const chats = this.state.chats;
    chats.push(chat)

    this.setState ({
      chats: chats
    })
  }

  componentDidMount() {
    this.initChats();
    this.initAnswers()
  }

  render(){
  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={this.state.chats} />
        <AnswersList answers={this.state.answers} />
      </div>
    </section>
  );
}
}
