import fetchApigee from "@/utils/apigeeService";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const res = await fetchApigee(`/web-commercetools/carts/${id}`);

  return Response.json(res);
}
