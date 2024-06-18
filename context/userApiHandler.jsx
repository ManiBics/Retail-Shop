export const signIn = async (credential) => {
  try {
    const response = await fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify(credential),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating the cart:", error);
  }
};

export const getCustomerById = async (id) => {
  try {
    const res = await fetch(`/api/getCustomer/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching the cart:", error);
  }
};

export const getCustomer = async (email) => {
  try {
    const res = await fetch(`/api/getCustomer?email=${email}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching the cart:", error);
  }
};
