 
import type { Metadata } from "next";
import Image from "next/image";
import MyPic from "../../../public/img/default.jpg";
 

export const metadata: Metadata = {
  title: "Page purpose",
  description: "Differents type of images in nextJs",
};

export default function Galery() {
 

  return (
    <>
 
      <div>Galery</div>
      {/* responsive ok  */}
      <Image
        src="/img/default.jpg"
        width={500}
        height={500}
        alt="screen code"
      />
      {/* responsive ok  */}
      <div className="max-w-[450px]  relative bg-slate-500 p-3 mx-auto my-3 ">
        <Image src={MyPic} alt="screen code" />
      </div>

      <div className="max-w-[550px]   relative bg-slate-500 p-3 mx-auto my-3 ">
        <Image
          src="/img/default.jpg"
          width={200}
          height={160}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ height: "100%", width: "100%" }} /// c'est important !
          alt="screen code"
        />
      </div>
    </>
  );
}
