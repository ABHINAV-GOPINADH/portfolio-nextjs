
import { connectToDB } from '@/lib/mongodb';
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const database = await connectToDB();
    const db = database.db("portfolio"); // your DB name
    const projects = await db.collection("projects").find({}).toArray();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching projects", error }, { status: 500 });
  }
}
