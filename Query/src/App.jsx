import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const pstData = async ({username, password}) => {
    const { data } = await axios.post('https://todo-dp.onrender.com/auth/login', {
      username,
      password,
    })
  }

  const createPostMutation = useMutation(pstData)
  function handleClick() {
    createPostMutation.mutate({
      username: email,
      password: password,
    })
  }
  if (createPostMutation.isError) {
    console.log(createPostMutation.error)
  }
  return (
    <div>
      <input
        placeholder="ENter username"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="psword"
        type="text"
        className="input input-bordered"
      />
      <button
        onClick={handleClick}
        className="btn btn-primary"
      >
        {createPostMutation.isLoading ? 'Loading...' : 'Sigin'}
      </button>
    </div>
  )
}

export default App
