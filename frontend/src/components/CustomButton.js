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
  const query = new URLSearchParams();
  const handleClick = () => {
    query.append("station", props.text);
    // "/osaka"にリダイレクトする
    window.location.href = "/osaka?" + query.toString();
    window.location.href = "./Result?" + query.toString();
  };

  // Buttonコンポーネントを返す
  return (
    <Button style={styleButton} color="primary" onClick={handleClick}>
      {props.text}
    </Button>
  );
};

export default CustomButton;
