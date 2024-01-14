import OrderItem from "./OrderItem";

export default function OrderBody({ items, isLoading }) {
  return (
    <div className="mt-[57px] mb-[160px] bg-white w-full h-full flex flex-col p-6 gap-[18px]">
      {isLoading ? (
        <div className="bg-white h-[88vh] pb-28 flex flex-col justify-center items-center">
          <span className="commonText">목록을</span>
          <span className="commonText">불러오고 있습니다.</span>
        </div>
      ) : (
        items.map((item, index) => <OrderItem key={index} item={item} />)
      )}
    </div>
  );
}
