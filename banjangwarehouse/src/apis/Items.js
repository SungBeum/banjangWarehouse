export const getItems = async () => {
  try {
    const response = await fetch("http://localhost:3001/items");
    return response.json();
  } catch (error) {
    alert("목록을 불러오는데 에러가 발생했습니다 !");
    console.error(error);
    throw error;
  }
};
