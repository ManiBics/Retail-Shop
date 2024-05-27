import fetchApigee from "@/utils/apigeeService";

export async function POST(request) {
  const body = await request.json();
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const res = await fetchApigee(`/web-commercetools/carts/${id}`, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return Response.json(res);
}
