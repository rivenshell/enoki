"use client"
import React from "react"
import Sidebar from "./components/Sidebar"
import Blog from "./components/Blog"
import { DarkThemeToggle, Flowbite } from "flowbite-react"

export default function Home() {
  return (
    <>
      <Flowbite>
        <Sidebar />
        <br />
        <div className="">
          <Blog />
          <div className="text-center sticky">
            Scroll... 😘
            <img src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"></img>
            <br />
            <h2>Lets build this future baby</h2>
          </div>
        </div>
      </Flowbite>
    </>
  )
}
