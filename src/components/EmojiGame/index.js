/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinLoseCard from '../WinOrLoseCard'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    clickedEmojiIds: [],
    copiedEmojiList: emojisList,
    topScore: 0,
    score: 0,
  }

  checkScore = id => {
    this.setState(prevState => ({
      clickedEmojiIds: [...prevState.clickedEmojiIds, id],
      score: prevState.score + 1,
    }))
    this.setState(prevState => ({
      copiedEmojiList: prevState.copiedEmojiList.sort(
        () => Math.random() - 0.5,
      ),
    }))
  }

  gameOver = clickedEmojiIds => {
    this.setState({topScore: clickedEmojiIds.length})
    this.setState({
      copiedEmojiList: [],
    })
  }

  emojiClicks = id => {
    const {clickedEmojiIds} = this.state
    const isEmojiPresent = clickedEmojiIds.includes(id)

    if (isEmojiPresent) {
      this.gameOver(clickedEmojiIds)
    } else {
      this.checkScore(id)
    }
  }

  render() {
    const {copiedEmojiList, score, topScore} = this.state
    console.log(topScore)
    return (
      <div className="mainDiv">
        <Navbar score={score} topScore={topScore} />
        <div className="emojisDiv">
          {copiedEmojiList.map(every => (
            <EmojiCard
              key={every.id}
              emojis={every}
              emojiClick={this.emojiClicks}
            />
          ))}
        </div>
        <WinLoseCard topScore={topScore} score={score} />
      </div>
    )
  }
}

export default EmojiGame
