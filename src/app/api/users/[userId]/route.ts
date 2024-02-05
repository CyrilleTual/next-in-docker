import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,  context: any) {
  const { params } = context;
  const search = req.nextUrl.searchParams;
  const searchArray = Array.from(search);

  console.log(params); // { userId: 'toto' }
  console.log(search); // { 'cle' => 'beau goss', 'deux' => 'popo' }
  console.log(searchArray); // [ [ 'cle', 'beau goss' ], [ 'deux', 'popo' ] ]

  return NextResponse.json({
    message: searchArray,
  });
}
