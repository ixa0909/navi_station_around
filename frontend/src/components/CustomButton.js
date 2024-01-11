// Material UIのButtonコンポーネントをインポート
import Button from "@mui/material/Button";

const styleButton = {
  borderRadius: "50%",
  border: "3px solid red",
  width: "90px",
  height: "90px",
  backgroundColor: "white",
  color: "black",
};

// ボタンのテキストと遷移先のページをpropsとして受け取る
const CustomButton = (props) => {
  // window.locationを使う
  const handleClick = () => {
    window.location.href = "/Result/" + props.text;
  };

  // Buttonコンポーネントを返す
  return (
    <Button style={styleButton} color="primary" onClick={handleClick}>
      {props.text}
    </Button>
  );
};

export default CustomButton;
