import React, { useState } from "react";
import { Button, Layout, Menu, } from 'antd';
import { Link } from "react-router-dom";
import {ButtonLF100} from "./ButtonLF";

const Logininfo = () => {
  const logout = () => {
    console.log('로그아웃클릭')
    sessionStorage.clear();
    window.location.reload();

  }
  const info1 = sessionStorage.getItem('info');

  if (info1 == null) {
    return (
      <div style={{ float: "right", marginTop: "-40px", marginRight: "12%" }}>
        <Link to="/Login">
          <ButtonLF100 value={'로그인'} />
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <div style={{ float: "right", marginTop: "-40px", marginRight: "12%" }}>
          <Link to="/MyPage">
            <ButtonLF100 value={'마이페이지'} />
          </Link>
        </div>
        <div style={{ float: "right", marginTop: "-40px", marginRight: "18%" }} onClick={logout}>
          <ButtonLF100 value={'로그아웃'} />
        </div>
      </div>
    )
  }



}
export default Logininfo;