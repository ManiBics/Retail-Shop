import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const line_items = await request.json();
  const params = {
    line_items,
    mode: "payment",
    success_url: `${request.headers.get(
      "origin"
    )}/order-placed?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${request.headers.get("origin")}/cart`,
  };
  const checkoutSession = await stripe.checkout.sessions.create(params);
  return Response.json(checkoutSession);
}
