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

export default function LogoBranding() {
  return (
    <Flowbite>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo
          href="/"
          img="enoki.svg"
          imgAlt="Flowbite logo"
        ></Sidebar.Logo>
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
