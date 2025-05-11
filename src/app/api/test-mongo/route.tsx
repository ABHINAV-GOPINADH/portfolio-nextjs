import { connectToDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectToDB();
    return Response.json({ message: "✅ Connected to MongoDB successfully!" });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    return new Response("❌ Failed to connect to MongoDB", { status: 500 });
  }
}
