import fetchNode from "@/utils/nodeService";

export async function POST(request) {
  const body = await request.json();
  const res = await fetchNode(`/signin`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  return Response.json(res);
}
