import { useEffect, useState } from "react";
import useItemsStore from "../stores/useItemsStore";
import { getItems } from "../apis/Items";

const useGetItems = () => {
  const { setItems } = useItemsStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isUnmounted = false;

    const fetchAllItems = async () => {
      setIsLoading(true);

      const res = await getItems();
      if (isUnmounted) return;
      if (res) {
        setItems(res);
        setIsLoading(false);
      }
    };

    fetchAllItems();
    return () => {
      isUnmounted = true;
    };
  }, [setItems]);

  return { isLoading };
};

export default useGetItems;
