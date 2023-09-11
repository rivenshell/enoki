"use client"
import React from "react"
import Sidebar from "./components/Sidebar"
import Blog from "./components/Blog"
import { DarkThemeToggle, Flowbite } from "flowbite-react"
import App from "./components/App"

export default function Home() {
  return (
    <Flowbite>
      <App />
      <DarkThemeToggle />
    </Flowbite>
  )
}
