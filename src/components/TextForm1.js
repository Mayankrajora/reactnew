import React from 'react'

export default function TextForm1(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div class="mb-3">
            <label for="myBox" className="form-label">Example textarea</label>
            <textarea class="form-control" id="myBox" rows="3"></textarea>
        </div>
    </div>
  )
}
