import React from 'react'
import NavBar from './Layout/NavBar'

export default function Layout(props) {
  return (
    <div>
        <NavBar></NavBar>
        <main>{props.children}</main>
    </div>
  )
}
