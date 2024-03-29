import { useEffect } from "react";
import useGetItems from "../../hooks/useGetItems";
import useItemsStore from "../../stores/useItemsStore";
import NavigationBar from "./NavigationBar";
import OrderBody from "./OrderBody";
import OrderFooter from "./OrderFooter";

export default function Order() {
  const { isLoading } = useGetItems();
  const { items, resetSelectedItems } = useItemsStore();

  useEffect(() => {
    resetSelectedItems();
  }, [resetSelectedItems]);

  return (
    <>
      <NavigationBar />
      <OrderBody items={items} isLoading={isLoading} />
      <OrderFooter isLoading={isLoading} />
    </>
  );
}
