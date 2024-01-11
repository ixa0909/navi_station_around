import React from "react";
import styles from "./css/Header1.module.css";

export default function Header() {
  const toStations = () => {
    window.location.href = "/stations";
  };
  return (
    <div className={styles.header}>
      <a href="/" className={styles.logo}>
        路線
      </a>
      <div className={styles.logo_img}>
        <img src="/img/logo.png" alt="" />
      </div>
      <img
        className={styles.stations}
        src="/img/stations.jpeg"
        alt="staions"
        onClick={toStations}
      ></img>
    </div>
  );
}
