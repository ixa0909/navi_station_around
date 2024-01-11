import React, { useState, useEffect } from "react";
import Header1 from "./Header1";
import styles from "./css/Result.module.css";

const Result = () => {
  // state 変数と更新関数を作る
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");

  // API を呼び出す関数を定義する
  const getOsakaInfo = async () => {
    try {
      const response = await fetch("http://localhost:8080/osaka");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // data を state にセットする
      setData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // エラーメッセージを state にセットする
      setMessage("Error fetching data: " + error.message);
    }
  };

  // コンポーネントがマウントされたときに API を呼び出す
  useEffect(() => {
    getOsakaInfo();
  }, []);

  return (
    <div>
      <Header1></Header1>
      {data ? (
        <div className={styles.results}>
          {Object.keys(data).map((key) => (
            <div key={key} className={styles.result}>
              <h2>{data[key].name}</h2>
              <p>所在地: {data[key].address}</p>
              <img
                style={{ width: "400px" }}
                src={data[key].photo}
                alt={data[key].name}
              />
              <br></br>
              <a href={data[key].url}>詳細ページ</a>
            </div>
          ))}
        </div>
      ) : (
        // data が存在しない場合はメッセージを表示する
        <p>{message}</p>
      )}
    </div>
  );
};

export default Result;
