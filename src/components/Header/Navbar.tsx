import Link from 'next/link'
import React, { ReactElement, ReactNode } from 'react'


type Props = {
    name:string,
    children: ReactElement
}


export default function Navbar(props: Props) {
  return (
    <div>
      <p>props qui vient de loin {props.name}</p>
      {props.children}

      <div className="flex justify-center">
        <Link className="m-3 px-3 bg-slate-400 border-2 rounded-md" href={"/"}>
          Home{" "}
        </Link>
        <Link
          className="m-3 px-3 bg-slate-400 border-2 rounded-md"
          href={"/galery"}
        >
          {" "}
          Galery{" "}
        </Link>
        <Link
          className="m-3 px-3 bg-slate-400 border-2 rounded-md"
          href={"/profile"}
        >
          Profile
        </Link>
        <Link
          className="m-3 px-3 bg-slate-400 border-2 rounded-md"
          href={"/posts/121"}
        >
          posts/121
        </Link>
        <Link
          className="m-3 px-3 bg-slate-400 border-2 rounded-md"
          href={"about"}
        >
          about
        </Link>
      </div>
    </div>
  );
}
