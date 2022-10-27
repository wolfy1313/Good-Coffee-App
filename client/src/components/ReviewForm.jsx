

import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../globals';



function ReviewForm (props) {


  let { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    let review = {...props.formState, listingId: id}
    await axios.post(`${BASE_URL}reviews`, review)
    props.toggleReviewSubmitted(!props.reviewSubmitted)
    props.setFormState(props.initialState);
  }

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Add a Review!</h1>
      <label htmlFor='name'>Name:</label>
        <input id="name" type="text" onChange={props.handleChange} value={props.formState.name} />
      <label htmlFor='review'>Review:</label>
        <textarea id="reviewText" type="text" onChange={props.handleChange} value={props.formState.reviewText} />
      <label htmlFor="rating"> Rating (between 1 and 5)</label>
        <input type="number" id="rating" name="quantity" min="1" max="5"  onChange={props.handleChange}value={props.formState.rating}/>
      <input type="submit" />
      </form>
    </div>
  )
}

export default ReviewForm