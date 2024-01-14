import React from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Recruitment = (props) => {
  return (
    <div>
      <div><Topbar xxx={props.checkLogout}/><Sidebar/></div>
      <h2 className='txt'>Recruitment</h2>
    </div>
  )
}

export default Recruitment
