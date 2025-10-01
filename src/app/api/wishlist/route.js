import { NextResponse } from "next/server";
import Connection from "../../../database/config";
import Wishlist from "../../../models/Wishlist";

export const runtime = "nodejs";

// GET /api/wishlist?userId=... (simple server-persisted wishlist)
export async function GET(req) {
  try {
    await Connection();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 });
    const list = await Wishlist.findOne({ userId }).lean();
    return NextResponse.json({ items: list?.items || [] });
  } catch (err) {
    console.error("Wishlist GET error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST /api/wishlist/clear
export async function POST(req) {
  try {
    await Connection();
    const body = await req.json();
    const { action, userId, productId, category } = body || {};
    if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 });

    const list = (await Wishlist.findOne({ userId })) || new Wishlist({ userId, items: [] });

    if (action === "add") {
      if (productId && category && !list.items.find(i => i.productId === productId && i.category === category)) {
        list.items.push({ productId, category });
      }
    } else if (action === "remove") {
      list.items = list.items.filter(i => !(i.productId === productId && i.category === category));
    } else if (action === "clear") {
      list.items = [];
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    await list.save();
    return NextResponse.json({ items: list.items });
  } catch (err) {
    console.error("Wishlist POST error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


