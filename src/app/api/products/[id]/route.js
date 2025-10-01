import { NextResponse } from "next/server";
import Connection from "../../../../database/config";
import Product from "../../../../models/Product";

export const runtime = "nodejs";

export async function GET(_req, { params }) {
  try {
    await Connection();
    const id = Number(params.id);
    const product = await Product.findOne({ id }).lean();
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(product);
  } catch (err) {
    console.error("Product GET error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


