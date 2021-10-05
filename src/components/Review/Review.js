import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const Review = () => {

  const [rating, setRating] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)

  const handleClick = value => {
    setRating(value)
  }

  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const stars = Array(5).fill(0)

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  }

  return (
    <div style={styles.container}>
     <h2>Star Reviews</h2>
     <div>
      {stars.map((_, index) => {
        return(
          <FaStar
            key={index}
            size={24}
            style={{
              marginRight: 10, 
              cursor: "pointer"
            }}
            color={(hoverValue || rating) > index ? colors.orange : colors.grey}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        )
      })}
     </div>
     <textarea
      placeholder="What do you think about this restaurant?"
    />
    <button>Submit</button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    opacity: 1
  }
}

export default Review
