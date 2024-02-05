 import { NextRequest, NextResponse } from "next/server";

export default function middleware(req : NextRequest, res: NextResponse ) {
  
 

    //// ici on recupère le log dans un cookie par exemple
  const islogged: boolean = true;

  //// if we are loggedIn
  if (islogged) {
    return NextResponse.next();
  }
  // if we are not loggedIn
  return NextResponse.redirect(new URL("/", req.url));
}

//// le middleware ne s'applique que pour les routes définies dans le matcher
export const config = {
    matcher: ['/profile']
}