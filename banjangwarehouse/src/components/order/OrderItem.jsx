export default function OrderItem() {
  return (
    <div className="flex items-center justify-between pl-3 p-2 border-custom-black border rounded-[15px]">
      <div className="bg-custom-gray min-w-[62px] h-[62px]"></div>
      <div className="flex flex-col gap-6 min-w-[215px] w-full">
        <div className="flex justify-start items-center">
          <span className="commonText min-w-[68px]">A 벽지</span>
          <span className="eventPopup min-w-[53px] flex justify-center items-center">
            이벤트
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center min-w-[57px]">
            <button className="commonText w-[19px]">-</button>
            <span className="commonText w-[19px]">0</span>
            <button className="commonText w-[19px]">+</button>
          </div>
          <span className="commonText">150,000원</span>
        </div>
      </div>
    </div>
  );
}
