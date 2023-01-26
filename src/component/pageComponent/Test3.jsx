import React, { useState } from "react";
import MainHeader from "./Header";
import ScrollBottom from "./ScrollBottom";
<<<<<<< HEAD
import { InboxOutlined } from '@ant-design/icons';
import { Button, message, Upload } from "antd";
=======
import { InboxOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
>>>>>>> 229568175e73339c23384d7f16d275c2aa23fea2
import { RightCircleOutlined } from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
import UploadPic from "./UploadPic";

import TextArea from "antd/es/input/TextArea";
<<<<<<< HEAD
import { Photo } from "@material-ui/icons";
const { Dragger } = Upload;

=======
import Footer from "./Footer";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
>>>>>>> 229568175e73339c23384d7f16d275c2aa23fea2
const TestComponent3 = () => {
  
  const props = {
    name: 'file',
    multiple: true,
    onChange(info) {
        const fd = new FormData();
        console.log("정보확인",info);
        Object.values(info).forEach((file) => fd.append("file", file));
        console.log('값확인',Object.keys(fd));
        sessionStorage.setItem('file',fd);
        //console.log('저장확인',sessionStorage.getItem('file'));
        // const { status } = info.file;
        // if (status !== 'uploading') {
        //   console.log(info.file, info.fileList);
        // }
        // if (status === 'done') {
        //   message.success(`${info.file.name} file uploaded successfully.`);
        // } else if (status === 'error') {
        //   message.error(`${info.file.name} file upload failed.`);

        // }
      },
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      }
    }
   const [state, setState] = useState({
     test_seq: "",
     test_title: "",
     test_price: "",
     test_cuesheet: "",
     test_video_realname: "",
     reg_dt: "",
     user_id: "",
     category_seq: "",
     category_name: ""
    })
  //  const [file, setFile] = useState(null);	//파일	
  //  const handleChangeFile = (event) => {
  //    console.log(event.target.files)
  //    setFile(event.target.files);

  //  }
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }


  
  
  
  const navigate = useNavigate();
  const clicked = () => {
   // console.log(fd)
    
    let test = {
      test_title: state.test_title,
      test_photo: sessionStorage.getItem('photo'),
      test_price: state.test_price,
      test_cuesheet: state.test_cuesheet,
      test_video: sessionStorage.getItem('file')
    }
    
      navigate('/test4',
      {
        state:
        {
          test_title: test.test_title,
          test_photo: test.test_photo,
          test_price: test.test_price,
          test_cuesheet: test.test_cuesheet,
          test_video: test.test_video
        }
      });
     //sessionStorage.setItem('test_video',test.test_video);
     //sessionStorage.setItem('test_cuesheet',test.test_cuesheet);
    console.log('데이터 확인',test)
  }
  return (
    <div>
      <form>
        <ScrollBottom />
        <MainHeader />

        <div
          style={{
            marginTop: "10px",
            marginLeft: "20vw",
            width: "20vw",
            height: "10vh",
            paddingLeft: "10px",
            backgroundColor: "#F7D5D4",
            borderRadius: 20,
          }}
        >
          <div
            className="start"
            style={{
              display: "inline-block",
              width: "100%",

            
            }}
          >
            <h1>Chapter3. 영상 업로드</h1>
            <h3 style={{ marginTop: "-25px" }}>
              ReadyCast에 본인 영상을 업로드 해보세요.
            </h3>
          </div>
        </div>
<<<<<<< HEAD
        <div style={{ marginBottom: "30px", marginTop: "25px", marginLeft: "20vw", width: "28vw", backgroundColor: "whitesmoke", borderRadius: 10 }}>
          <Dragger {...props} >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">일단 눌러</p>
            <p className="ant-upload-hint">
              이곳에 파일을 업로드해라
            </p>
          </Dragger>
        </div>

        <div style={{ marginBottom: "30px", marginTop: "25px", marginLeft: "20vw" }}>
          <div>
            <input name="test_title" type="text" onChange={onChange} value={state.test_title} className="title" placeholder="제목을 입력해주세요" style={{ width: "28vw", padding: "10px 10px 10px 10px", boxSizing: "border-box" }} ></input>
          </div>
          <br />
          <input name="test_price" type="text" onChange={onChange} value={state.test_price} className="price" placeholder="가격을 입력해주세요" style={{ width: "28vw", padding: "10px 10px 10px 10px", boxSizing: "border-box" }} ></input>
          <div style={{ marginTop: "25px" }}>
            <UploadPic />
          </div></div>
=======
>>>>>>> 229568175e73339c23384d7f16d275c2aa23fea2
        <div
          style={{
            marginBottom: "30px",
            marginTop: "25px",
            marginLeft: "20vw",
            width: "28vw",
            backgroundColor: "whitesmoke",
            borderRadius: 10,
          }}
        >
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click</p>
            <p className="ant-upload-hint">이곳에 파일을 드래그 하세요.</p>
          </Dragger>
        </div>

        <div
          style={{
            marginBottom: "30px",
            marginTop: "25px",
            marginLeft: "20vw",
          }}
        >
          <input
            type="text"
            className="title"
            placeholder="영상의 제목을 입력해주세요."
            style={{
              width: "28vw",
              padding: "10px 10px 10px 10px",
              boxSizing: "border-box",
            }}
          ></input>
          <div style={{ marginTop: "25px" }}>
            <UploadPic />
          </div>
        </div>
        {/*<div
          className="Chart02"
          style={{
            marginTop: "25px",
            marginLeft: "20vw",
            width: "28vw",
            height: "30vh",
<<<<<<< HEAD
            backgroundColor: "black",
          }}
        ></div>


        <div
          style={{ marginTop: "-710px", marginLeft: "50vw" }}
        >
        <TextArea
        value={state.test_cuesheet}
        name="test_cuesheet"
      showCount
      maxLength={800}
      style={{
        height: 400,
        width : 550,
        resize: 'none',
        overflowY :"scroll"
      }}
      onChange={onChange}
      placeholder="큐시트작성"
    /> 
    <div style={{marginLeft:"20px" ,marginTop :"50px"}}>
    <h3>1.판매하고자 하는 상품의 명과 이미지를 입력하세요.</h3>
      <h3>2. 라이브 커머스의 제목과 설명을 입력하세요.</h3>
      <h3>3.라이브 커머스 영상을 업로드해주세요.</h3>
      <h3>4.분석결과를 토대로 상품의 가격을 책정해주세요.</h3>
      
            <RightCircleOutlined type="button" onClick={()=>clicked()}
              style={{
                position: "absolute",
                bottom: "20px",
                marginTop: "0px",
                right: "400px",
                fontSize: "300%",
                color: "black",
              }}
            >
            </RightCircleOutlined>
            

          </div>
          <div style={{ marginBottom: "15px" }}>

          </div>



=======
            backgroundColor: "gray",
            
          }}
        ></div> */}

        <div style={{ marginTop: "-710px", marginLeft: "50vw" }}>
          <TextArea
            showCount
            maxLength={800}
            style={{
              height: 400,
              width: 550,
              resize: "none",
              overflowY: "scroll",
            }}
            onChange={onchange}
            placeholder="라이브 커머스 영상, 상품정보에 대해  간략하게 설명해주세요."
          />
          <div style={{ marginLeft: "20px", marginTop: "50px" }}>
            <h3>1.판매하고자 하는 상품의 명과 이미지를 입력하세요.</h3>
            <h3>2. 라이브 커머스의 제목과 설명을 입력하세요.</h3>
            <h3>3.라이브 커머스 영상을 업로드해주세요.</h3>
            <h3>4.분석결과를 토대로 상품의 가격을 책정해주세요.</h3>
            <input
            type="text"
            className="price"
            placeholder="가격을 책정해주세요."
            style={{
              width: "28vw",
              padding: "10px 10px 10px 10px",
              boxSizing: "border-box",
            }}
          ></input>
            <Link to={"/test2"}>
              <LeftCircleOutlined
                style={{
                  position: "absolute",
                  bottom: "50px",
                  marginTop: "0px",
                  left: "400px",
                  fontSize: "300%",
                  color: "black",
                }}
              />
            </Link>
            <Link to={"/test4"}>
              <input
                type="submit"
                name="videoSubmit"
                id="videoSubmit"
                style={{ display: "none" }}
              />

              <RightCircleOutlined
                style={{
                  position: "absolute",
                  bottom: "50px",
                  marginTop: "0px",
                  right: "400px",
                  fontSize: "300%",
                  color: "black",
                }}
              />
            </Link>
          </div>
          <div style={{ marginBottom: "15px" }}></div>
        </div>
        <div className="testBtn" style={{ position: "absolute", bottom:"2vh", right:"36vw" }}>
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
                borderBottom: "4px solid #F7D5D4"
              }}></div>
          </Link>

          <Link to={"/test4"}>
            <div className='test4'
              style={{
                width: "5vw",
                marginLeft: "53vw",
                marginTop: "-0.4vh",
                borderBottom: "4px solid gray"
              }}></div>
          </Link>
>>>>>>> 229568175e73339c23384d7f16d275c2aa23fea2
        </div>
      </form>
      <Footer/>
    </div>
  );
};
export default TestComponent3;
