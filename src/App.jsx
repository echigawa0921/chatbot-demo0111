import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';
import { NextWeekOutlined } from '@material-ui/icons';

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
    this.selectAnswer = this.selectAnswer.bind(this)
  }

displayNextQuestion = (nextQuestionId) => {
  const chats = this.state.chats
  chats.push({
    text: this.state.dataset[nextQuestionId].question,
    type: 'question'
  })

  this.setState({
    answers: this.state.dataset[nextQuestionId].answers,
    chats: chats,
    currentID: nextQuestionId
  })
}

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 400);
        break;
      // 正規表現でhttpsから始まるものか判定する。
      case(/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a')
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;

      default:
        const chats = this.state.chats;
        chats.push({
            text: selectedAnswer,
            type: 'answer',
        })
    
        this.setState ({
          chats: chats
        })

        setTimeout( () => this.displayNextQuestion(nextQuestionId), 500);
         break;
    }
  }

  componentDidMount() {
    this.initAnswer = ""
    this.selectAnswer(this.initAnswer, this.state.currentID)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea){
      scrollArea.scrollTo({
        top: scrollArea.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  render(){
  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={this.state.chats} />
        <AnswersList answers={this.state.answers} select={this.selectAnswer} />
      </div>
    </section>
  );
}
}
