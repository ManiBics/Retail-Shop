import fetchApigee from "@/utils/apigeeService";

export async function DELETE(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const version = searchParams.get("version");
  const res = await fetchApigee(
    `/web-commercetools/carts/${id}?version=${version}`,
    {
      method: "DELETE",
    }
  );

  return Response.json(res);
}
