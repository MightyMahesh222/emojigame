// Write your code here.
const WinLoseCard = props => {
  const {score} = props
  return (
    <div>
      <div>
        <h1>You Lose</h1>
        <p>score</p>
        <h1>{score}/12</h1>
        <button type="button">Play Again</button>
      </div>
      <div>
        <img
          alt="logo"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        />
      </div>
    </div>
  )
}

export default WinLoseCard
