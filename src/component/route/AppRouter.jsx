import React from "react"
import { Route, Routes, BrowserRouter} from "react-router-dom"
import MainComponent from "../pageComponent/MainComponent";
import Login from "../pageComponent/Login";
import TestComponent from "../pageComponent/Test";
import MyPage from "../pageComponent/MyPage";

import TestComponent2 from "../pageComponent/Test2";
import TestComponent3 from "../pageComponent/Test3";
import TestComponent4 from "../pageComponent/Test4";
import FileData from "../pageComponent/FileData";


const AppRouter =() => {
    return (
        <div>
      <BrowserRouter>
        <Routes>
            
            
            <Route path="/" element={<MainComponent />} />
            <Route path="/home" element={<MainComponent />} />
            <Route path="/login" element={<Login/>} />
            <Route path ="/test" element={<TestComponent />} />
            <Route path ="/mypage" element={<MyPage />} />
            <Route path ="/test2" element={<TestComponent2 />} />
            <Route path ="/test3" element={<TestComponent3 />} />
            <Route path ="/test4" element={<TestComponent4 />} />
            <Route path="/FileData"  element={<FileData />}></Route>
        </Routes>
        </BrowserRouter></div>
    );
}

export default AppRouter;