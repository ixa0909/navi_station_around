import React, { useEffect } from "react";
import { useState } from "react";
const Result = () => {
  const [message, setMessage] = useState("");

  const getOsakaInfo = async () => {
    try {
      const response = await fetch("http://localhost:8080/osaka");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      let message = "";
      for (let key in data) {
        message += "name: " + data[key].name + " ";
        message += "address: " + data[key].address + " ";
        message += "url: " + data[key].url + " ";
        message += "photo: " + data[key].photo + " ";
      }
      console.log(data)
      // setMessage(data.message);
      setMessage(message);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setMessage("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    // コンポーネントがマウントされた時にgetOsakaInfo関数を呼び出す
    getOsakaInfo();
  }, [message]); // 空の配列を渡して初回のみ実行する

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Result;
