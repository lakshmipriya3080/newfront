import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Training = (props) => {
  return (
    <div>
      <div><Topbar xxx={props.checkLogout}/><Sidebar/></div>
      <h2 className='txt'>training details</h2>
    </div>
  )
}

export default Training