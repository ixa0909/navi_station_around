import React from "react";
import CustomButton from "./components/CustomButton";
import Header1 from "./Header1";
import styles from "./css/Stations.module.css";

const Stations = () => {
  return (
    <div>
      <Header1></Header1>
      <div className={styles.line1}></div>
      <div className={styles.stations1}>
        <CustomButton text={"千里中央"} />
        <CustomButton text={"桃山台"} />
        <CustomButton text={"緑地公園"} />
        <CustomButton text={"江坂"} />
        <CustomButton text={"東三国"} />
        <CustomButton text={"新大阪"} />
        <CustomButton text={"西中島南方"} />
        <CustomButton text={"中津"} />
        <CustomButton text={"梅田"} />
        <CustomButton text={"淀屋橋"} />
        <CustomButton text={"本町"} />
        <CustomButton text={"心斎橋"} />
        <br />
      </div>
      <div className={styles.line2}></div>
      <div className={styles.stations2}>
        <CustomButton text={"なんば"} />
        <CustomButton text={"大国町"} />
        <CustomButton text={"動物園前"} />
        <CustomButton text={"天王寺"} />
        <CustomButton text={"昭和町"} />
        <CustomButton text={"西田辺"} />
        <CustomButton text={"長居"} />
        <CustomButton text={"あびこ"} />
        <CustomButton text={"北花田"} />
        <CustomButton text={"新金岡"} />
        <CustomButton text={"なかもず"} />
      </div>
    </div>
  );
};

export default Stations;
