

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ReviewForm () {
  let navigate = useNavigate()
  const [name, setName] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/coffee-shops/:id')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Add a Review!</h1>
      <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <label>Review:</label>
        <input type="text" value={reviewText} onChange={(e) => setReviewText(e.target.value)}/>
      <label for="rating"> Rating (between 1 and 5)</label>
        <input type="number" id="rating" name="quantity" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)}/>
      <input type="submit" />
      </form>
    </div>
  )
}

export default ReviewForm