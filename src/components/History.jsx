import { Avatar } from '@material-ui/core'
import React from 'react'
import '../assets/style/History.css'
const History = ({title,image,profileSrc}) => {
  return (
    <div className="History" style={{background:`url(${image})`}}>
      <Avatar className="History__avatar" src={profileSrc}/>
      <h4>{title}</h4>
    </div>
  )
}

export default History
