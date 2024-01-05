// Material UIのButtonコンポーネントをインポート
import Button from "@mui/material/Button";

// ボタンのテキストと遷移先のページをpropsとして受け取る
const CustomButton = (props) => {
  // // useNavigateフックを使ってページ遷移の関数を取得
  // window.locationを使う
const handleClick = () => {
  window.location.href = props.page;
};

  // Buttonコンポーネントを返す
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {props.text}
    </Button>
    // <Button variant="contained" color="primary" onClick={handleClick}>
    //   {props.text}
    // </Button>
  );
};

export default CustomButton;
