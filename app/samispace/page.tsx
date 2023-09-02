"use client"
import { DarkThemeToggle, Flowbite } from "flowbite-react"
import React from "react"
import Blog from "../components/Blog"
import Sidebar from "../components/Sidebar"

export default function samispace() {
  return (
    <>
      <Flowbite>
        <Sidebar />
        <div className="h-screen text-center flex-wrap dark:bg-gray-800">
          I crafted this space 🖥️ <br />i guess that makes me a god🪴
          <Blog />
        </div>
      </Flowbite>
    </>
  )
}
