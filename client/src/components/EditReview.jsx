import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'


const EditReview = () => {
  const BASE_URL= process.env.REACT_APP_BASE_URL

  const navigate = useNavigate()
  const { id } = useParams()

  const [formState, setFormState] = useState(null);

  
  useEffect(() => {
    
    const getReviewById = async () => {
      try {
        let res = await axios.get(`http://localhost:3001/api/reviews/${id}`)
        setFormState(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getReviewById()
  }, [])
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.put(`${BASE_URL}/reviews/${id}`, formState)
    navigate(-1)
  }
  
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value})
  }

  
  return (
    <div className='currentReviewState'>
      {formState &&
      (<form onSubmit={handleSubmit}>
      <input id="name" type="text" defaultValue={formState.name} onChange={handleChange}/>
      <h4>Review: </h4> 
      <textarea id="reviewText" type="text" defaultValue={formState.reviewText} onChange={handleChange}/>
      <h3>Rating:</h3> 
      <input type="number" id="rating" min="1" max="5" defaultValue={formState.rating} onChange={handleChange}/>
      <button>Update Review</button></form>)
    } 
    </div>
  )
}

export default EditReview