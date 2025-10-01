import { NextResponse } from "next/server";
import Connection from "../../../../database/config";
import Product from "../../../../models/Product";

export const runtime = "nodejs";

export async function GET(req) {
  try {
    await Connection();
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") || "";
    const products = await Product.find({ name: { $regex: q, $options: "i" } }).limit(20).lean();
    return NextResponse.json({ products });
  } catch (err) {
    console.error("Products search error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


