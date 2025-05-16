import { NextResponse } from "next/server";
import Service from "@/models/Service";
import { connectToDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectToDB();
    const services = await Service.find();
    return NextResponse.json(services);
  } catch (error) {
    console.error("Error fetching services:", error); // ✅ Use the variable
    return NextResponse.json({ message: "Error fetching services" }, { status: 500 });
  }
}
