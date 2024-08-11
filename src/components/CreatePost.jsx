import React, { useEffect } from "react"
import Container from './Container'

function CreatePost() {
  return (
   <Container>
    <form>
        <div className="form-group">
          <label for="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input autofocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
        </div>

        <div className="form-group">
          <label for="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea name="body" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
   </Container>
  )
}

export default CreatePost