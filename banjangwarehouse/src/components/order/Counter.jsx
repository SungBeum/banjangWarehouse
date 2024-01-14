import useItemsStore from "../../stores/useItemsStore";

export default function Counter({ item }) {
  const { selectedItems, setSelectedItems } = useItemsStore((state) => ({
    selectedItems: state.selectedItems,
    setSelectedItems: state.setSelectedItems,
  }));

  const increment = () => {
    const itemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.id === item.id,
    );
    if (itemIndex !== -1) {
      const newSelectedItems = [...selectedItems];
      newSelectedItems[itemIndex] = {
        ...newSelectedItems[itemIndex],
        quantity: newSelectedItems[itemIndex].quantity + 1,
      };
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const decrement = () => {
    const itemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.id === item.id,
    );
    if (itemIndex !== -1 && selectedItems[itemIndex].quantity > 1) {
      const newSelectedItems = [...selectedItems];
      newSelectedItems[itemIndex] = {
        ...newSelectedItems[itemIndex],
        quantity: newSelectedItems[itemIndex].quantity - 1,
      };
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem.id !== item.id),
      );
    }
  };

  const currentItem = selectedItems.find(
    (selectedItem) => selectedItem.id === item.id,
  );
  const quantity = currentItem ? currentItem.quantity : 0;

  return (
    <div className="flex items-center min-w-[57px]">
      <button className="commonText w-[19px]" onClick={decrement}>
        -
      </button>
      <span className="commonText w-[19px]">{quantity}</span>
      <button className="commonText w-[19px]" onClick={increment}>
        +
      </button>
    </div>
  );
}
