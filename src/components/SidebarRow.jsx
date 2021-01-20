import { Avatar } from "@material-ui/core";
import React from "react";
import '../assets/style/SidebarRow.css'
const SidebarRow = ({ title, Icon, src }) => {
  return (
    <div className="SidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon/> }
      {title && <h4>{title}</h4>}
    </div>
  );
};

export default SidebarRow;
