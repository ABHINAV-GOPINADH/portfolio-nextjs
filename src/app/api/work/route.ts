import { connectToDB } from "@/lib/mongodb";
import Work from "@/models/Work";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const work = await Work.find();
    return NextResponse.json(work, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}
