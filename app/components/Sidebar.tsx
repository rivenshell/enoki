"use client"

import { Badge, Flowbite, Sidebar } from "flowbite-react"
import { DarkThemeToggle } from "flowbite-react"
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCode,
  HiTable,
  HiOutlineSparkles,
  HiDocumentDuplicate,
} from "react-icons/hi"

import { Collapse } from "flowbite"
import type { CollapseOptions, CollapseInterface } from "flowbite"
import { SidebarCollapse } from "flowbite-react/lib/esm/components/Sidebar/SidebarCollapse"

// // target element to be collapsed
// const $sidenav = document.getElementById("sidenav")

// // trigger
// const $trigger = document.getElementById("sidebar-trigger")

// const options: CollapseOptions = {
//   onCollapse: () => {
//     console.log("element has been collapsed")
//   },
//   onExpand: () => {
//     console.log("element has been expanded")
//   },
//   onToggle: () => {
//     console.log("element has been toggled")
//   },
// }
const handleClick = (event: MouseEvent) => {
  console.log("clicked")
  console.log(event)
}

export default function sidenav() {
  return (
    <Flowbite>
      <Sidebar
        collapsed={true} // collapse sidebar on smaller screens
        aria-label="Sidebar with logo branding example"
        className="sticky top-0 sidebar flex x-0 z-50 h-screen overflow-y-auto bg-white dark:bg-gray-800 dark:text-gray-400"
        id="sidenav"
      >
        <Sidebar.Logo
          href="/"
          img="enoki.svg"
          imgAlt="Flowbite logo"
        ></Sidebar.Logo>
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="sidebar inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
          aria-controls="navbar-hamburger"
          aria-expanded="false"
          id="sidebarTrigger"
          // onClick={handleClick}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <DarkThemeToggle />
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={HiChartPie}>
              <p>Dashboard</p>
            </Sidebar.Item>
            <Sidebar.Item href="/notes" icon={HiDocumentDuplicate}>
              <p>Notes</p>
            </Sidebar.Item>
            <Sidebar.Item href="/reflection" icon={HiInbox}>
              <p>Reflection</p>
            </Sidebar.Item>
            <Sidebar.Item href="/samispace" icon={HiOutlineSparkles}>
              <p>sami space</p>
            </Sidebar.Item>
            <Sidebar.Item href="/codespace" icon={HiOutlineCode}>
              <p>code space</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              <p>Sign In</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              <p>Sign Up</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Sidebar.CTA>
          <div className="mb-3 flex items-center">
            <Badge color="warning">Beta</Badge>
            <button
              aria-label="Close"
              className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
              type="button"
            >
              {/* <SeeSourceCodeForSVG /> */}
            </button>
          </div>
          <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
            <p>
              *Caution✋🏾* <br />
              This site is in beta build. all functionality may not work as
              expected
            </p>
          </div>
          <a
            className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
            href="#"
          >
            <p>Turn new navigation off</p>
          </a>
        </Sidebar.CTA>
      </Sidebar>
    </Flowbite>
  )
}

// const collapse: CollapseInterface = new Collapse($sidenav, $trigger, options)

// // show the target element
// collapse.expand()
