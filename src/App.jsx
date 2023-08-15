import { useState } from "react"

import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        <h1>
          I will keep applying myself to the
          <br /> To the best of my ability
        </h1>
      </div>
    </>
  )
}

export default App
