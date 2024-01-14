export default function Complete() {
  return (
    <div className="flex flex-col bg-white w-full h-[100vh] gap-3 items-center justify-center">
      <img src="/checkFilled.svg" alt="checkMark" width={48} height={48} />
      <span className="commonText">주문이 완료되었습니다.</span>
    </div>
  );
}
