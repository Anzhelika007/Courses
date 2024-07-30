import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState('Mario');

  if(!user) {
    return <Navigate to='/' replace={true} />
  }

  return (
    <div className="about">
      <h2>About us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque pariatur, id fuga, fugiat necessitatibus quis explicabo deleniti ad aperiam vitae repellendus quo tempore molestias quae, in assumenda mollitia voluptates!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque pariatur, id fuga, fugiat necessitatibus quis explicabo deleniti ad aperiam vitae repellendus quo tempore molestias quae, in assumenda mollitia voluptates!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque pariatur, id fuga, fugiat necessitatibus quis explicabo deleniti ad aperiam vitae repellendus quo tempore molestias quae, in assumenda mollitia voluptates!</p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}