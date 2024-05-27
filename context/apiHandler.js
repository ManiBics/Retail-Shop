const getCart = async (id) => {
  try {
    const res = await fetch(`/api/getCart?id=${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching the cart:", error);
  }
};

const createCart = async () => {
  try {
    const response = await fetch("/api/createCart", {
      method: "POST",
      body: JSON.stringify({
        currency: "EUR",
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating the cart:", error);
  }
};

const addItemToCart = async (cartId, product, version) => {
  const response = await fetch(`/api/updateCart?id=${cartId}`, {
    method: "POST",
    body: JSON.stringify({
      version,
      actions: [
        {
          action: "addLineItem",
          sku: product.productTitle,
          quantity: 1,
          externalPrice: {
            type: "centPrecision",
            centAmount: Math.round(product.pricevalue * 100) || 0,
            currencyCode: "EUR",
          },
        },
      ],
    }),
  });
  const data = await response.json();
  return data;
};

const removeItemFromCart = async (cartId, lineItemId, version) => {
  const response = await fetch(`/api/updateCart?id=${cartId}`, {
    method: "POST",
    body: JSON.stringify({
      version,
      actions: [
        {
          action: "removeLineItem",
          lineItemId,
        },
      ],
    }),
  });
  const data = await response.json();
  return data;
};

const updateItemQuantity = async (cartId, lineItemId, quantity, version) => {
  const token = await getAuthToken();
  const response = await fetch(`${apiUrl}/${projectKey}/carts/${cartId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      version,
      actions: [
        {
          action: "changeLineItemQuantity",
          lineItemId,
          quantity,
        },
      ],
    }),
  });
  const data = await response.json();
  return data;
};

export {
  createCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
};
