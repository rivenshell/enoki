import React from "react"
import Blog from "../components/Blog"
import Sidebar from "../components/Sidebar"

export default function samispace() {
  return (
    <>
      <div className="text-center">
        <Sidebar />
        I crafted this space 🖥️ <br />i guess that makes me a god 🪴
        <Blog />
      </div>
    </>
  )
}
