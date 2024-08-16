import { deleteNotice, getNotices, postNotice } from "@/src/lib/notice-db";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const data = await getNotices();

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// api/notices/
export async function POST(request: NextRequest) {
  try {
    const { title, body } = await request.json();
    const data = await postNotice({ title, body });
    return Response.json({ data });

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = await request.nextUrl;
    const _id = searchParams.get("_id");
    if (!_id) {
      throw new Error('missing_id');
    }
    const data = await deleteNotice(_id);
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}