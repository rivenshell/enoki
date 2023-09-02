"use client"
import React from "react"
import Sidebar from "./components/Sidebar"
import Blog from "./components/Blog"
import { DarkThemeToggle, Flowbite } from "flowbite-react"

export default function Home() {
  return (
    <Flowbite>
      <Sidebar />
      <div className="absolute inset-5 top-0 text-center h-screen dark:bg-gray-900 dark:text-gray-100 ">
        <div className="flex-auto min-h-8 h-screen mb-3 text-lg text">
          <img src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"></img>
          <br />
          <h1 className="hover:text-cyan-700"> Calmness amidst the chaos 🧃</h1>
        </div>
      </div>
      <Blog />
      <DarkThemeToggle />
    </Flowbite>
  )
}
