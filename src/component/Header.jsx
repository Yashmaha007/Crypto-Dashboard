import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Header className= "Header">
      <div className="width">
        <h1><Link to= "/">Crypto DashBoard</Link></h1>
      </div>
    </Header>
  )
}
