import React from "react";
import styles from "./css/Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.head}>
        <a href="/" className={styles.logo}>
          路線
        </a>
        <div className={styles.logo_img}>
          <img src="/img/logo.png" alt="" />
        </div>
      </div>

      <div className={styles.nav_box}>
        <a href="/" className={styles.nav_info}>
          <div className={styles.img}>
            <img src="/img/b1.png" alt="" />
          </div>
          <p>四つ橋線</p>
        </a>
        <a href="/stations" className={styles.nav_info}>
          <div className={styles.img}>
            <img src="/img/b2.jpg" alt="" />
          </div>
          <p>御堂筋線</p>
        </a>
        <a href="/" className={styles.nav_info}>
          <div className={styles.img}>
            <img src="/img/b3.png" alt="" />
          </div>
          <p>中央線</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
