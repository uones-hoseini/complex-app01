import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Container from "./Container"
import Axios from "axios"

function CreatePost() {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
       const response=await Axios.post("/create-post", { title, body, token: localStorage.getItem("complex-appToken") })
           
      //Redirect new post url
      navigate(`/post/${response.data}`)

      console.log("create a new post")
    } catch (e) {
      console.log("This post have a problem")
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input onChange={(e) => setTitle(e.target.value)} autoFocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea onChange={(e) => setBody(e.target.value)} name="body" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Container>
  )
}

export default CreatePost
