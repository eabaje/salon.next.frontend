import React from "react";
import Header from "../components/header/header";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/Provider";
import $ from "jquery";
import { signout } from "../context/actions/auth/auth.action";
import TopHeaderBar from "../components/header/top-header-bar";
import LayoutHeader from "../components/header/header";
const MainLayout = ({ children }) => {
  const {
    authDispatch,
    authState: { user, isLoggedIn },
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);
  // const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      // setUser(JSON.parse(localStorage.getItem("user")));
      if (user) {
        setAuthLoaded(true);

        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);

        window.location = "/signin";
      }
    } catch (error) {}
  };

  const preloader = () => {
    $(".loader-bg").fadeOut();
    // $(window).on("load", function () {
    //   $(".loader-bg").fadeOut();
    // });
  };

  const a = 1;
  React.useEffect(() => {
    let controller = new AbortController();
    getUser();
    preloader();
    typeof window !== "undefined" || preloader();
    return () => controller?.abort();
  }, [a]);
  // console.log(`User`, user);

  return (
    <>
      <div class="loader loader-bg">
        <div class="loader-inner ball-pulse">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <LayoutHeader />
      {children}
    </>
  );
};

export default MainLayout;
