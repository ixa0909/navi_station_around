// Material UIのButtonコンポーネントをインポート
import Button from "@mui/material/Button";

// ボタンのテキストと遷移先のページをpropsとして受け取る
const CustomButton = (props) => {
  // // useNavigateフックを使ってページ遷移の関数を取得
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
    <Button variant="contained" color="primary" onClick={handleClick}>
      {props.text}
    </Button>
  );
};

export default CustomButton;
