export const getItems = async () => {
  try {
    const response = await fetch("http://localhost:3001/items");
    return response.json();
  } catch (error) {
    console.error("에러가 발생했습니다.");
    throw error;
  }
};
