// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, topScore} = props

  return (
    <div className="navDiv">
      <div className="nav">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <p>Emoji Game</p>
      </div>

      <div className="nav">
        <p>Score:{score}</p>
        <p className="score">Top Score:{topScore}</p>
      </div>
    </div>
  )
}

export default Navbar
