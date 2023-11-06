// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, emojiClick} = props
  const {emojiUrl, id} = emojis

  const changeEmoji = () => {
    emojiClick(id)
  }

  return (
    <li className="emojiDiv" onClick={changeEmoji}>
      <img className="img" alt="emoji" src={emojiUrl} />
    </li>
  )
}

export default EmojiCard
