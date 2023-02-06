import React, { Component } from "react";
import axios from "axios";
import ApiService from "../ApiService";
import "./Login.css";
import MainHeader from "./Header";
import styles from "./Login.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      user_pw: "",
      user_hp: "",
      user_email: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveUser = (e) => {
    e.preventDefault();

    let user = {
      user_id: this.state.user_id,
      user_pw: this.state.user_pw,
      user_hp: this.state.user_hp,
      user_email: this.state.user_email,
    };
    ApiService.addUser(user)
      .then((res) => {
        console.log("완료");
        if(res.data=='su'){
          alert('회원가입 완료');
          window.location.replace("/Login")
        }else{
          alert('회원가입 실패');
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log("saveUser() 에러", err);
      });

     
  };

  render() {
    return (

      <div style={{backgroundColor:'#404040'}}>
         <MainHeader />
       
         <div
          style={{
            width: "400px",
            position: "absolute",
            height: "300px",
            backgroundColor: "white",
            padding: "30px",
       marginTop:"140px",
            marginLeft: "40vw",
            textAlign: "left",
            boxShadow :"3px 3px 3px grey",
            borderRadius : "30px"
           
          }}
        >
       
        <div style={{ textAlign: "left" , marginLeft : "50px" }}>
          <h2>JOIN</h2>
          <form>
            <table style={{ textAlign: "left" }}>
              <div>
                <tr>
                  <td style={{ width: "40%" }}>
                    <label className="label" style={{ textAlign: "left" }}>
                      ID 
                    </label>
                  </td>

                  <td>
                    <input
                      type="text"
                      placeholder="ID 입력"
                      name="user_id"
                      value={this.state.user_id}
                      onChange={this.onChange}
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              </div>

              <div>
                <tr>
                  <td style={{ width: "120px" }}>
                    <label className="label">Password </label>
                  </td>
                  <td>
                    <input
                      type="password"
                      placeholder="PW 입력"
                      name="user_pw"
                      value={this.state.user_pw}
                      onChange={this.onChange}
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              </div>
              <tr>
           
              </tr>
              <div>
                <tr>
                  <td style={{ width: "120px" }}>
                    <label className="label">H.P </label>
                  </td>

                  <td>
                    <input
                      type="text"
                      placeholder="H.P 입력"
                      name="user_hp"
                      value={this.state.user_hp}
                      onChange={this.onChange}
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              </div>
              <div>
                <tr>
                  <td style={{ width: "120px" }}>
                    <label className="label">Email </label>
                  </td>
                  <td>
                    <input
                      type="email"
                      placeholder="Email 입력"
                      name="user_email"
                      value={this.state.user_email}
                      onChange={this.onChange}
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              </div>
            </table>

            <Button className="btn_login" onClick={this.saveUser} style={{ borderRadius: "20px", width: "100px", float: "right", marginRight: "30px",marginTop :"10px", backgroundColor: "#404040", color: "white" }}>JOIN</Button>
            <p style={{fontSize :"14px"}}><a href="/Login" >LOGIN</a> 페이지로 돌아가기</p>
          </form>
        </div>
        </div>

      </div>
    );
  }
}
export default Join;
