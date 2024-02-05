"use client";
import { useRouter } from "next/navigation";

type Params = {
  params: {
    id: number;
  };
};

function PageId({ params }: Params) {
  const router = useRouter();

  return (
    <>
      <div>++ PageId {params.id}</div>
      <button onClick={router.back}>Retour</button>
    </>
  );
}

export default PageId;
