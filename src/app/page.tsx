import { Arimo, Inter, Roboto_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

 
export default function Home() {
  return (
    <>
      <div className={inter.className}>
        <div>coucou</div>
      </div>
      <div className={roboto_mono.className}>
        <div>coucou</div>
      </div>
      <div className={"font-cedar"}>
        <div>coucou</div>
      </div>
    </>
  );
}
