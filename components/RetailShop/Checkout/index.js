import { useBackDrop } from "@/context/BackDropContext";
import { currency } from "@/utils/constant";
import getStripe from "@/utils/stripe";
import { Button } from "@mui/material";

const Checkout = (props) => {
  const { showBackDrop, hideBackDrop } = useBackDrop();

  const handleSubmit = async () => {
    showBackDrop();
    const line_items = props.items.map((item) => {
      const {
        quantity,
        pricevalue,
        productTitle1,
        productDescription,
        productImage,
      } = item;
      return {
        quantity,
        price_data: {
          currency,
          unit_amount: Math.round(pricevalue * 100),
          product_data: {
            name: productTitle1,
            description: productDescription,
            images: [productImage.src],
          },
        },
      };
    });
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(line_items),
    });

    const checkoutSession = await res.json();
    hideBackDrop();
    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    console.warn(error.message);
  };

  return (
    <Button
      disabled={props.hasOutOfStock}
      onClick={handleSubmit}
      variant={props.theme}
      color="success"
    >
      {props.label}
    </Button>
  );
};

export default Checkout;
