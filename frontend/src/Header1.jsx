import React from "react";
import styles from "./css/Header1.module.css";

export default function Header() {
  const toHome = () => {
    window.location.href = "/";
  };
  const toStations = () => {
    window.location.href = "/stations";
  };
  return (
    <div className={styles.header}>
      <img
        className={styles.lines}
        src="./img/home.png"
        alt="lines"
        onClick={toHome}
      ></img>
      <img
        className={styles.stations}
        src="./img/stations.jpeg"
        alt="staions"
        onClick={toStations}
      ></img>
    </div>
  );
}
