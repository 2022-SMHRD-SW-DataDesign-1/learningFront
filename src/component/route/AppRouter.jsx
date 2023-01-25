import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import MainComponent from "../pageComponent/MainComponent";
import Login from "../pageComponent/Login";
import TestComponent from "../pageComponent/Test";

import Test2 from "../pageComponent/Test2";
import Test3 from "../pageComponent/Test3";
import Test4 from "../pageComponent/Test4";
import MyPage from "../pageComponent/MyPage";
import TextArea from "antd/es/input/TextArea";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainComponent />} />
                    <Route path="/home" element={<MainComponent />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/test" element={<TestComponent />} />

                    <Route path="/test2" element={<Test2 />} />
                    <Route path="/test3" element={<Test3 />} />
                    <Route path="/test4" element={<Test4 />} />
                    <Route path="/myPage" element={<MyPage />} />
                    <Route path="/TextArea" element={<TextArea />} />
                </Routes>
            </BrowserRouter></div>
    );
}

export default AppRouter;