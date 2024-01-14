import useGetItems from "../../hooks/useGetItems";
import useItemsStore from "../../stores/useItemsStore";
import NavigationBar from "./NavigationBar";
import OrderBody from "./OrderBody";
import OrderFooter from "./OrderFooter";

export default function Order() {
  useGetItems();
  const { items } = useItemsStore();

  return (
    <>
      <NavigationBar />
      <OrderBody />
      <OrderFooter />
    </>
  );
}
