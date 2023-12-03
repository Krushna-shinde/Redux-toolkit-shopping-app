import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBarPanal";
import { Provider } from "react-redux";
import store from '../src/store/store'


const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
