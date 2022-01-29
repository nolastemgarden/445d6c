import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useScreenWidth } from "../../hooks";

import { ResponsiveLayout } from "./Layouts";
import { login } from "../../store/utils/thunkCreators";

const Login = (props) => {
  const width = useScreenWidth()
  const { user, login } = props;
  
  if (user.id) {
    return <Redirect to="/home" />;
  }
  
  let layout = (width > 850) ? "desktop" : "mobile"
  
  // if (width > 850) {
  //   return <DesktopLayout
  //     page="login"
  //     login={login}
  //   />
  // } else {
  //   return <MobileLayout
  //     page="login"
  //     login={login}
  //   />
  // }
  return (
    <ResponsiveLayout
      layout={layout}
      page="login"
      login={login}
    />
  )
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
