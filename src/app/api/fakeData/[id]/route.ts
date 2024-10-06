import { NextResponse } from "next/server";
import { posts } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const idNumber = parseInt(id);

  const post = posts.find((p) => p.id === idNumber);

  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
}
