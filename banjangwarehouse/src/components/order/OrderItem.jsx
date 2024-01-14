import useItemsStore from "../../stores/useItemsStore";
import Counter from "./Counter";

export default function OrderItem({ item }) {
  const selectedItems = useItemsStore((state) => state.selectedItems);
  const isSelected = selectedItems.some(
    (selectedItem) => selectedItem.id === item.id,
  );
  const backgroundColorClass = isSelected ? "bg-custom-orange-10" : "";

  return (
    <div
      className={`flex items-center justify-between pl-3 p-2 border-custom-black border rounded-[15px] gap-[15px] ${backgroundColorClass}`}
    >
      <div className="bg-custom-gray min-w-[62px] h-[62px]"></div>
      <div className="flex flex-col gap-6  w-full">
        <div className="flex justify-start items-center">
          <span className="commonText">{item.name}</span>
          {item.event === 1 && (
            <span className="eventPopup min-w-[53px] mx-3 flex justify-center items-center">
              이벤트
            </span>
          )}
        </div>
        <div className="flex justify-between">
          <Counter item={item} />
          <span className="commonText">{item.price.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
}
