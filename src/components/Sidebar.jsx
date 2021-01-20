import React from 'react'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import PeopleIcon from '@material-ui/icons/People';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import StoreIcon from '@material-ui/icons/Store';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../StateProvider';

const Sidebar = () => {
  const [{user},dispatch]=useStateValue()

  return (
    <div className="Sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName}/>
      <SidebarRow Icon={LocalHospitalIcon} title="covid-19 Informacion Peru"/>
      <SidebarRow Icon={FlagIcon} title="pages"/>
      <SidebarRow Icon={PeopleIcon} title="friend"/>
      <SidebarRow Icon={ChatBubbleIcon} title="messenger"/>
      <SidebarRow Icon={StoreIcon} title="tienda"/>
      <SidebarRow Icon={OndemandVideoIcon} title="video" />
      <SidebarRow Icon={ExpandMoreIcon} title="market" />
    </div>
  )
}

export default Sidebar
