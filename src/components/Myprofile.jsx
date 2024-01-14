import React from 'react'

import Sidebar from '../Sidebar/Sidebar'

import Topbar from '../Topbar/Topbar'

const Myprofile = (props) => {
  return (
    <div>
      <div><Topbar xxx={props.checkLogout}/><Sidebar/></div>
      <h2 className='txt'>my profile</h2>
    </div>
  )
}

export default Myprofile