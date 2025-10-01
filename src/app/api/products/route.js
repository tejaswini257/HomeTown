import { NextResponse } from "next/server";
import Connection from "../../../database/config";
import Product from "../../../models/Product";

export const runtime = "nodejs";

// GET /api/products?category=slug
export async function GET(req) {
  try {
    await Connection();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const q = searchParams.get("q");

    const filter = {};
    if (category) filter.category = category;
    if (q) filter.name = { $regex: q, $options: "i" };

    const products = await Product.find(filter).lean();
    return NextResponse.json({ products });
  } catch (err) {
    console.error("Products GET error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


