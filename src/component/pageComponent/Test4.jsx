import React, { Component } from "react";
import MainHeader from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { Layout, theme } from "antd";
import MainFooter from "./Footer";
import MainBoard from "./MainBoard";
import CarouselComponent from "./CarouselComponent";
import { render } from "@testing-library/react";
import ScrollBottom from "./Dont_Touch/ScrollBottom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Footer from "./Footer";
import axios from "axios";

// 등록

class Test4 extends Component {


  constructor(props) {
    super(props);

    this.state = {
      test_seq: "",
      test_title: "",
      test_photo: "",
      test_price: "",
      test_cuesheet: "",
      test_video: "",
      test_video_realname: "",
      reg_dt: "",
      user_id: "",
      category_seq: "",
      category_name: "",
      test_content:"",
      video_url:"",
    };
  }
  componentDidMount() {
    

    console.log('category_seq',sessionStorage.getItem('category_seq'));

    let getUrl = sessionStorage.getItem("video_url");
    let test_title = sessionStorage.getItem('test_title');
    let test_photo = sessionStorage.getItem("photo");
    let test_price = sessionStorage.getItem('test_price');
    let test_cuesheet = sessionStorage.getItem("cuesheet");
    let test_video = sessionStorage.getItem("test_video");
    let test_video_realname = sessionStorage.getItem("test_video_realname");
    let user_id = sessionStorage.getItem('info');
    let test_content = sessionStorage.getItem('test_content');
    let category_seq = sessionStorage.getItem('category_seq');
    
    this.setState({video_url:getUrl});
    this.setState({test_title : test_title});
    this.setState({test_photo : test_photo});
    this.setState({test_price : test_price});
    this.setState({test_cuesheet : test_cuesheet});
    this.setState({test_video : test_video});
    this.setState({test_video_realname : test_video_realname});
    this.setState({user_id : user_id});
    this.setState({test_content : test_content});
    this.setState({category_seq :category_seq});
  }
  //navigate = useNavigate();
  submit = () => {
    let test ={
      test_title : this.state.test_title,
      test_photo : this.state.test_photo,
      test_price : this.state.test_price,
      test_cuesheet : this.state.test_cuesheet,
      test_video : this.state.test_video,
      test_video_realname : this.state.test_video_realname,
      test_content : this.state.test_content,
      user_id : this.state.user_id,
      category_seq : this.state.category_seq
    }

    axios.post('/test/test',test, {
     
      baseURL: 'http://localhost:8081/users'
    })
      .then((response) => {
         //if(response.data == '/testlist'){
          //this.navigate('/testlist');

         //}
      })
      .catch((error) => {
        // 예외 처리
      })
  }

  render() {
    return (
      <div>



        <form>
     
          <MainHeader />

          <div
            style={{
              marginTop: "2vh",
              marginLeft: "19.5vw",
              width: "31vw",
              height: "5vh",
              paddingLeft: "10px",
              backgroundColor: "#404040",
              // borderRadius: 20,
              textAlign:'center',
              color:'white',
              boxShadow :"5px 5px #b4b4b4"
            }}
          >
            <div
              className="start"
              style={{
                display: "inline-block",
                width: "100%",
                textShadow :"2px 2px 2px gray"
              }}
            >
              <h1 style={{marginTop:'0vh'}}>모의 영상 생성</h1>
            </div>
          </div>

          <div
            className="Chart01"
            style={{
              width: "700px",
              height: "50vh",
              marginTop: "10px",
              marginLeft: "20vw",
              backgroundColor: "white",

              borderRadius: 10,
            }}
          ><video src={this.state.video_url} controls autoPlay muted playsInline
          style={{
            width: "700px",
            height: "50vh",
            marginTop: "10px",
            marginLeft: "-0.5vw",}}></video></div>
          <div
            className="itemContents"
            style={{
              display: "inline-block",
              width: "700px",
              marginLeft: "19.5vw",
              backgroundColor: "#404040",
              marginTop: "20px",
              borderRadius :"10px",
              boxShadow :"3px 3px #b4b4b4"
              
            }}
          >
            <div className="nameSpace" style={{ marginTop: "-20px"}}>
              <p style={{fontSize :"24px", fontWeight :"bold", color:'white', marginLeft:'1vw'}}>
                [뷰티쓱세일]공동판매구역 랑콤편! 전 구매고객 럭키 박스 증정
              </p>
            </div>
            <div>
            <div className="userName" style={{fontSize : "18px", color:'white'}}>작성자 : {this.state.user_id}</div>
            <div
              className="telNumber"
              style={{ width: "20vw", marginLeft: "30%", marginTop: "-21px" ,fontSize : "18px", color:'white'}}
            >
              Tel : 000 - 1234 - 5678
            </div>
            <div
              className="price"
              style={{ width: "20vw", marginLeft: "70%", marginTop: "-21px",fontSize : "18px", color:'white' }}
            >
              가격 : {this.state.test_price}
            </div>
            </div>
          </div>

          <div className="Script">
            <div
              className="ScriptContents"
              style={{
                width: "500px",
                height: "464px",
                marginLeft: "1100px",
                marginTop: "-570px",
                overflowY: "scroll",
                backgroundColor: "white",
                border:'2px solid #404040'
              }}
            >{this.state.test_cuesheet}</div>
            <div 
            style={{ 
              marginLeft: "1100px",
              width:'26.5vw',
              color:'white',
              height:'4vh',
              marginTop:'-1vh'
             }}>
              <div style={{backgroundColor:'#404040', height:'4vh'}}>
              <h3 style={{padding:'5px'}}>1. 작성했던 스크립트와 영상을 확인해보세요.</h3>
              </div>
              <div style={{backgroundColor:'#404040', height:'4vh'}}>
              <h3 style={{padding:'5px'}}>2. 모두 올바르게 작성되었다면 확인을 누르세요.</h3>
              </div>
            </div>
          </div>

          <div style={{marginLeft :"66vw", marginTop:'7vh'}}>
            <form >
            <input type="checkbox" value="agree" name="agreement1" style={{marginLeft:"10px"}}/>개인정보 동의 여부 
            <input type="checkbox" value="agree" name="agreement2" style={{marginLeft:"60px"}}/>영상 정보 공개
            </form>
          </div>

          <Link to={"/test3"}>
              <LeftCircleOutlined
                style={{
                  position: "absolute",
                  bottom: "50px",
                  marginTop: "0px",
                  left: "10vw",
                  fontSize: "300%",
                  color: "black",
                }}
              />
            </Link>
          <Link to={"/testlist"}>
            <RightCircleOutlined
            type="Button"
            onClick={this.submit}
            style={{
              position: "absolute",
              bottom: "50px",
              marginTop: "0px",
              right: "10vw",
              fontSize: "300%",
              color: "black",
            }}
            />
            </Link>
          
          <div className="testBtn" style={{ position: "absolute", bottom:"2vh", right:"40vw" }}>
          <Link to={"/test1"}>
            <div className='test1'
              style={{
                width: "5vw",
                marginLeft: "35vw",
                marginTop: "7vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>

          <Link to={"/test2"}>
            <div className='test2'
              style={{
                width: "5vw",
                marginLeft: "41vw",
                marginTop: "-0.5vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>

          <Link to={"/test3"}>
            <div className='test3'
              style={{
                width: "5vw",
                marginLeft: "47vw",
                marginTop: "-0.5vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>

          <Link to={"/test4"}>
            <div className='test4'
              style={{
                width: "5vw",
                marginLeft: "53vw",
                marginTop: "-0.4vh",
                borderBottom: "4px solid #0d0d73"
              }}></div>
          </Link>
        </div>
          
        </form>
        <Footer/>
      </div>
    );
  }
}
export default Test4;