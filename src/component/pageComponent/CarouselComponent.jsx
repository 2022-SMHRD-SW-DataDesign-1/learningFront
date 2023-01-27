import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CarouselComponent.css";
import Right from "../../img/VectorRight.png";
import Left from "../../img/VectorLeft.png";
import { Link } from "react-router-dom";
import Banner1 from "../../img/banner1.png";
import Banner0 from "../../img/banner0.png";
import Banner2 from "../../img/banner2.png";
import demo4 from "../../img/demo4.jpg";
import demo5 from "../../img/demo5.png";
import demo6 from "../../img/demo6.png";
import demo7 from "../../img/demo7.jpg"


const Pre = styled.div`
  width: 50px;
  height: 30px;
  position: absolute;
left : -70px;

`;
const NextTo = styled.div`
  width: 50px;
  height: 30px;
  position: absolute;
  right: -100px;

`;
const CarouselComponent = () => {
  //라이브러리 이벤트 속성과 디자인 요소 스타일링

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode :true,
    centerPadding : '10px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rows : 1,
    nextArrow: (
      <NextTo>
        <img src={Left} />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        {""}
        <img src={Right} />
      </Pre>
    ),
  };

  return (
    <div><Link  to={"/test"}>
    <Slider {...settings}>
      <div className="banner" style={{width: "80vw"}}><div style={{width : "100%"}}><img src={demo4} style={{width : "400px", height :"300px"}}/></div></div>
      <div className="banner" style={{width: "80vw"}}><div style={{width : "100%", backgroundColor : "transparent"}}><img src={demo5} style={{width : "400px", height :"300px"}}/></div></div>
      <div className="banner" style={{width: "80vw"}}><div style={{width : "100%",  backgroundColor : "transparent"}}><img src={demo6} style={{width : "400px", height :"300px"}}/></div></div>
      <div className="banner" style={{width: "80vw"}}><div style={{width : "100%",  backgroundColor : "transparent"}}><img src={demo7} style={{width : "400px", height :"300px"}}/></div></div>
     {/* <div className="banner" style={{width: "80vw"}}><div style={{width : "100%"}}><img src={demo5} style={{width : "400px", height :"300px"}}/></div></div>*/}
    </Slider>
    </Link>
    </div>
    
  );
};
export default CarouselComponent;
