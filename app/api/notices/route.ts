import { getNotices, postNotice } from "@/src/lib/notice-db";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const data = await getNotices();

    return Response.json({ data });
  } catch (error) {

  }
}

// api/notices/
export async function POST(request: NextRequest) {
  try {
    const { title, body } = await request.json();
    const data = await postNotice({ title, body });
    return Response.json({ data });

  } catch (error) {
    return Response.json({ error });
  }
}