export const getOrderDetails = async (id) => {
  try {
    const res = await fetch(`/api/getOrderDetails?id=${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching the Order Details:", error);
  }
};
