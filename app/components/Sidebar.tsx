"use client"

import { Sidebar } from "flowbite-react"
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCode,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi"

export default function LogoBranding() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo
        href="#"
        img="enoki.png"
        imgAlt="Flowbite logo"
      ></Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>Notes</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            <p>Reflection</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>sami space</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineCode}>
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
    </Sidebar>
  )
}
