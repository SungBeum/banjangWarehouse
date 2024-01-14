import useItemsStore from "../../stores/useItemsStore";

export default function OrderFooter({ isLoading }) {
  const selectedItems = useItemsStore((state) => state.selectedItems);
  const totalQuantity = selectedItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

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
        className={`p-[10px] text-[18px] leading-[21.78px] ${!isLoading ? "bg-black text-white" : "bg-custom-gray text-white"}`}
        disabled={isLoading}
      >
        주문하기
      </button>
    </div>
  );
}
