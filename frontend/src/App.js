import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Stations from "./Stations";
import Result from "./Result";
import "./css/App.module.css";

// import React, { useState } from 'react';

// function App() {
//   const [message, setMessage] = useState('');

//   const getOsakaInfo = async () => {
//     try {
//       const response = await fetch('/api/osaka');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//       setMessage('Error fetching data: ' + error.message);
//     }
//   };

import React from "react";

// ボタンのテキストとページ遷移先を変数として定義

// アプリケーションのコンポーネントを定義
function App() {
  // アプリケーションの見た目を返す
  // ルーティングを設定し、パスに応じてページを切り替える
  // MyButton コンポーネントを使って、/home から /results に遷移できるようにする
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "bisque" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// アプリケーションをエクスポート
export default App;
