import React from "react"
import Sidebar from "../components/Sidebar"

export default function notes() {
  return (
    <>
      <Sidebar />
      <div className=" h-screen dark:bg-gray-900 top-0">
        <p className="px-20 text-center dark:bg-gray-800 dark:text-gray-200 ">
          notes
        </p>
        <h1 className="px-20 text-center absolute inset-5  dark:bg-gray-900 dark:text-gray-200">
          Under Construction 😡
          <br /> lub u 💕
        </h1>
      </div>
    </>
  )
}
