import { useNavigate } from "react-router-dom";
import { ORDER } from "../../constants/path";
import { navigateTo } from "../../utils/routing";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-black flex flex-col gap-10 justify-center">
      <img src="/logoBig.svg" alt="logoBig" />
      <button
        className="routingButton"
        onClick={() => navigateTo(navigate, ORDER)}
      >
        주문하러 가기
      </button>
    </div>
  );
}
