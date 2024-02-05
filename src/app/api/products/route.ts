import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "ok" });
}

export async function POST(request:Request) {
  /// pour recupérer les datas passées en post 
  const data = await request.json()
  console.log (data)
  return NextResponse.json({ datas: data });
}