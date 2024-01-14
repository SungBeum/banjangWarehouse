import { useNavigate } from "react-router-dom";
import useItemsStore from "../../stores/useItemsStore";
import { navigateTo } from "../../utils/routing";
import { COMPLETE } from "../../constants/path";
import { useState } from "react";

export default function OrderFooter({ isLoading }) {
  const navigate = useNavigate();
  const selectedItems = useItemsStore((state) => state.selectedItems);
  const [isOrdering, setIsOrdering] = useState(false);
  const totalQuantity = selectedItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  const order = () => {
    if (totalQuantity === 0) {
      alert("주문 수량을 확인해주세요 !");
    } else {
      setIsOrdering(true);
      navigateTo(navigate, COMPLETE);
    }
  };

  return (
    <div className="flex flex-col bg-white fixed bottom-0 p-[27px] pt-[23px] gap-[18px] w-full min-h-[170px] rounded-t-xl footerShadow">
      <div className="flex flex-col">
        <span className="commonText flex justify-end">
          총 수량: {totalQuantity}개
        </span>
        <span className="commonText flex justify-end">
          총 가격: {totalPrice.toLocaleString()}원
        </span>
      </div>
      <button
        className={`p-[10px] text-[18px] leading-[21.78px] ${isOrdering ? "bg-custom-gray text-white" : isLoading ? "bg-custom-gray text-white" : "bg-black text-white"}`}
        disabled={isLoading || isOrdering}
        onClick={order}
      >
        {isOrdering ? "로딩중.." : "주문하기"}
      </button>
    </div>
  );
}
