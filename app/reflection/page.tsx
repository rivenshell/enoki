"use client"
import React from "react"
import Sidebar from "../components/Sidebar"

export default function reflection() {
  return (
    <>
      <Sidebar />
      <div className="text-center absolute inset-5 top-0 dark:bg-gray-900 dark:text-gray-300 h-screen">
        <h1>Nothing to see here people</h1>
      </div>
    </>
  )
}
