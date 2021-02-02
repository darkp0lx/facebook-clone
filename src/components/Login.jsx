import { Button } from "@material-ui/core";
import React from "react";
import "../assets/style/Login.css";
import { auth, provider } from "../firebase";
import {actionTypes} from '../reducer'
import { useStateValue } from "../StateProvider";
const Login = () => {
  const [state,dispatch]=useStateValue()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user
        })
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="Login">
      <div>
        <img
          className="Login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          className="Login__facebook"
          src="https://marketingparafotografos.es/wp-content/uploads/2015/04/facebook.png"
          alt=""
        />
      </div>
      <Button
        type="submit"
        onClick={signIn}
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        Iniciar Sesión
      </Button>
    </div>
  );
};

export default Login;
