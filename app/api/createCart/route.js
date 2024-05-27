import fetchApigee from "@/utils/apigeeService";

export async function POST(request) {
  const body = await request.json();
  const res = await fetchApigee("/web-commercetools/carts", {
    method: "POST",
    body: JSON.stringify(body),
  });

  return Response.json(res);
}
