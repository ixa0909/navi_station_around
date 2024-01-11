import React, { useState, useEffect } from "react";
import Header1 from "./Header1";
import styles from "./css/Result.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Result = () => {
  // state 変数と更新関数を作る
  const [data, setData] = useState(null);
  const { station } = useParams();

  // API を呼び出す関数を定義する
  useEffect(() => {
    axios
      .get("/api/hottopepper", {
        params: {
          station: station,
        },
      })
      .then((response) => {
        // data を state にセットする
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/api/osaka", {
        params: {
          station: station,
        },
      })
      .then((response) => {
        // data を state にセットする
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [station]);

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
        <p>missing data</p>
      )}
    </div>
  );
};

export default Result;
