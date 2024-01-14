export default function OrderFooter() {
  return (
    <div className="flex flex-col bg-white absolute bottom-0 p-[27px] pt-[23px] gap-[18px] w-full min-h-[170px] rounded-t-xl footerShadow">
      <div className="flex flex-col">
        <span className="commonText flex justify-end">총 수량: 0개</span>
        <span className="commonText flex justify-end">총 가격: 0원</span>
      </div>
      <button className="bg-black text-white p-[10px] text-[18px] leading-[21.78px]">
        주문하기
      </button>
    </div>
  );
}
