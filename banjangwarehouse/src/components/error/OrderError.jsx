import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../utils/routing";
import { ORDER } from "../../constants/path";

export default function OrderError() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateTo(navigate, ORDER);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col bg-white w-full h-[100vh] justify-center">
      <span className="commonText">주문에 실패하였습니다.</span>
      <span className="commonText">다시 시도해주세요.</span>
    </div>
  );
}
