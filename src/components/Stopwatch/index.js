import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsed: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  setTimeFormat = () => {
    const {timeElapsed} = this.state
    const minutes = Math.floor(timeElapsed / 60)
    const seconds = Math.floor(timeElapsed % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsed: prevState.timeElapsed + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  onClickReset = () => {
    this.setState({timeElapsed: 0})
  }

  render() {
    const time = this.setTimeFormat()
    return (
      <div className="app-container">
        <h1 className="app-heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="timer"
              className="img-size"
            />
            <h1 className="heading">Timer</h1>
          </div>
          <h1 className="app-heading" testid="timer">
            {time}
          </h1>
          <div className="btn-container">
            <button
              type="button"
              className="start-btn"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-btn"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
