import fetchApigee from "@/utils/apigeeService";

export async function GET(request, { params }) {
  const slug = params.slug;
  const res = await fetchApigee(`/web-commercetools/customers/${slug}`);

  return Response.json(res);
}
