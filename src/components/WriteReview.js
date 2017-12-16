import React from 'react'
import { Form, Button, Rating } from 'semantic-ui-react'
import Header from '../Header'

const WriteReview = () => {
  return(
    <div>
      <Header />
      <div id="new-review-form-container">
        <Form id="new-review-form">
          <Form.Field required>
            <label>Select your rating:</label>
            <Rating icon='star' defaultRating={1} maxRating={5} />
            <label>Review title:</label>
            <Form.Input placeholder='Give your review a catchy title'/>
            <label>Review content:</label>
            <Form.TextArea placeholder='Write your review here'/>
          </Form.Field>
        </Form>
      </div>
      <Button className="form-button" content='Submit your review'/>
    </div>
  )
}

export default WriteReview

//City
//cafe name
//checkboxes:
//optional: wifi? y/n checkbox
//time limit? y/n blank box for #
//pictures
