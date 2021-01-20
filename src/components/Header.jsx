import React from "react";
import '../assets/style/Header.sass'
import logo from "../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { Avatar, IconButton } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "../StateProvider";
const Header = () => {
const [{user},dispatch]=useStateValue()
  return (
    <div className="Header">
      <div className="Header__left">
        <img className="Header__logo" src={logo} alt="fb" />
        <div className="Header__input">
          <SearchIcon />
          <input placeholder="buscar en fb.." type="text" />
        </div>
      </div>
      <div className="Header__center">
        <div className="Header__center__options">
          <div className="Header__option Header__option--active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="Header__option ">
            <OndemandVideoIcon fontSize="large" />
          </div>
          <div className="Header__option ">
            <StorefrontIcon fontSize="large" />
          </div>
          <div className="Header__option ">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
          <div className="Header__option ">
            <VideogameAssetIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className="Header__right">
        <div className="Header__info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddCircleIcon/>
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
