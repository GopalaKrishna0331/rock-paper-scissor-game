import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  Container,
  MainContainer,
  Heading,
  ScoreContainer,
  ScoreHead,
  UnorderList,
  ListElement,
  Button,
  PopContainer,
  ResultContainer,
  GameResult,
  Paragraph,
} from './StyledComponent'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {status: false, userImg: '', opponentImg: '', score: 0, result: ''}

  onClickRockButton = () => {
    const randomItem =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const {id, imageUrl} = randomItem
    if (id === 'PAPER') {
      this.setState(prevState => ({
        status: true,
        userImg:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
        opponentImg: imageUrl,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (id === 'SCISSORS') {
      this.setState(prevState => ({
        status: true,
        userImg:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
        opponentImg: imageUrl,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        status: true,
        userImg:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
        opponentImg: imageUrl,
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    }
  }

  onClickScissorsButton = () => {
    const randomItem =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const {id, imageUrl} = randomItem
    if (id === 'ROCK') {
      this.setState(prevState => ({
        status: true,
        userImg:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
        opponentImg: imageUrl,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (id === 'PAPER') {
      this.setState(prevState => ({
        status: true,
        userImg:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
        opponentImg: imageUrl,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        status: true,
        userImg:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
        opponentImg: imageUrl,
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    }
  }

  onClickPaperButton = () => {
    const randomItem =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const {id, imageUrl} = randomItem
    if (id === 'ROCK') {
      this.setState(prevState => ({
        status: true,
        userImg:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
        opponentImg: imageUrl,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (id === 'SCISSORS') {
      this.setState(prevState => ({
        status: true,
        userImg:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
        opponentImg: imageUrl,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else {
      this.setState(prevState => ({
        status: true,
        userImg:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
        opponentImg: imageUrl,
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    }
  }

  onclickPlayAgain = () => {
    this.setState(prevState => ({
      status: false,
      userImg: '',
      opponentImg: '',
      score: prevState.score,
      result: '',
    }))
  }

  matchGameContainer = () => (
    <UnorderList>
      <ListElement>
        <Button
          type="button"
          data-testid="rockButton"
          onClick={this.onClickRockButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="ROCK"
            className="img"
          />
        </Button>
      </ListElement>
      <ListElement>
        <Button
          type="button"
          data-testid="scissorsButton"
          onClick={this.onClickScissorsButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt="SCISSORS"
            className="img"
          />
        </Button>
      </ListElement>
      <ListElement>
        <Button
          type="button"
          data-testid="paperButton"
          onClick={this.onClickPaperButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            alt="PAPER"
            className="img"
          />
        </Button>
      </ListElement>
    </UnorderList>
  )

  resultConatiner = () => {
    const {userImg, opponentImg, result} = this.state
    return (
      <ResultContainer>
        <GameResult>
          <div className="column">
            <Paragraph>YOU</Paragraph>
            <img src={userImg} alt="your choice" className="result-img" />
          </div>
          <div className="column">
            <Paragraph>OPPONENT</Paragraph>
            <img
              src={opponentImg}
              alt="opponent choice"
              className="result-img"
            />
          </div>
        </GameResult>
        <p className="result-head">{result}</p>
        <button
          className="play-again-button"
          type="button"
          onClick={this.onclickPlayAgain}
        >
          PLAY AGAIN
        </button>
      </ResultContainer>
    )
  }

  render() {
    const {status, score} = this.state
    return (
      <Container>
        <MainContainer>
          <div>
            <Heading>
              Rock <br /> Paper <br /> Scissors
            </Heading>
          </div>
          <ScoreContainer>
            <ScoreHead>score</ScoreHead>
            <ScoreHead count>{score}</ScoreHead>
          </ScoreContainer>
        </MainContainer>
        {status ? this.resultConatiner() : this.matchGameContainer()}

        <PopContainer>
          <Popup
            modal
            trigger={
              <button className="pop-up-button" type="button">
                RULES
              </button>
            }
          >
            {close => (
              <div className="pop-container">
                <button
                  className="close-button"
                  type="button"
                  onClick={() => close()}
                >
                  <RiCloseLine size="25px" />
                </button>

                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rules"
                />
              </div>
            )}
          </Popup>
        </PopContainer>
      </Container>
    )
  }
}

export default App
