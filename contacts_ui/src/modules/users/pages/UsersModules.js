import React from 'react'
import { Outlet } from 'react-router-dom'
import UsersNavigation from '../components/UsersNavigation'

function UsersModules() {
  return (
    <div>
        <UsersNavigation/>
        <Outlet/>

    </div>
  )
}

export default UsersModules