import React, { useState, useEffect } from "react";
import Header1 from "./Header1";
import styles from "./css/Result.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Result = () => {
  // state 変数と更新関数を作る
  const [dataHottopepper, setDataHottopepper] = useState(null);
  const [dataSpot, setDataSpot] = useState(null);
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
        setDataHottopepper(response.data);
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
        setDataSpot(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [station]);

  return (
    <div>
      <Header1></Header1>
      {dataSpot && dataHottopepper && (
        <div className={styles.results}>
          {Object.keys(dataSpot).map((key) => (
            <div key={key} className={styles.result}>
              <h2>{dataSpot[key].name}</h2>
              <p>所在地: {dataSpot[key].address}</p>
              <img
                style={{ width: "400px" }}
                src={"/img/" + dataSpot[key].photo}
                alt={dataSpot[key].name}
              />
              <br></br>
              <a href={dataSpot[key].url}>詳細ページ</a>
            </div>
          ))}
          {Object.keys(dataHottopepper).map((key) => (
            <div key={key} className={styles.result}>
              <h2>{dataHottopepper[key].name}</h2>
              <p>所在地: {dataHottopepper[key].address}</p>
              <img
                style={{ width: "400px" }}
                src={dataHottopepper[key].photo}
                alt={dataHottopepper[key].name}
              />
              <br></br>
              <a href={dataHottopepper[key].url}>詳細ページ</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;
