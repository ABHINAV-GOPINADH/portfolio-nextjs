
import { connectToDB } from '@/lib/mongodb';
import mongoose from 'mongoose';
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const db = mongoose.connection.db!;
    const projects = await db.collection("projects").find({}).toArray();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching projects", error }, { status: 500 });
  }
}
