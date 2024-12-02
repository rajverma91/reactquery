import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Reatc query</Link>
          </li>
          <li>
            <Link to="/create-post">Create Post</Link>
          </li>
          <li>
            <Link to="/update-post">Update Post</Link>
          </li>
          <li>
            <Link to="/delete-post">Delete Post</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
