import fetchApigee from "@/utils/apigeeService";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const res = await fetchApigee(`/web-commercetools/orders/${id}`, {
    cache: "no-store",
  });

  return Response.json(res);
}
