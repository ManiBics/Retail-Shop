import fetchApigee from "@/utils/apigeeService";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const customerId = searchParams.get("customerId");
  const res = await fetchApigee(
    `/web-commercetools/orders?where=(customerId%20%3D%20%22${customerId}%22)`,
    {
      cache: "no-store",
    }
  );

  return Response.json(res);
}
