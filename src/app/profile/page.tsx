"use client";

import { useAppContext } from "@/contexts/app-context";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Profile() {
  const router = useRouter();
  const go = (i: number) => {
    router.push(`/profile/${i + 1}`);
  };

  // appel au context  
  const {globalState : state, setGlobalState: setState} = useAppContext();

    
  return (
    <>
      <h1>List of the profiles </h1>
      <div>
        <div className="m-auto backdrop:w-[80%]  flex items-center justify-center ">
          {[...Array(4)].map((_, i) => (
            // <li key={i} className="m-3 px-3 rounded-md bg-yellow-200">
            //   {/* Utilisation de l'indice de la boucle pour générer des liens uniques */}
            //   {/* <a href={`/profile/${i + 1}`}>Profile {i + 1}</a> */}
            //   <button onClick={()=>go(i)}>user n°{i+1}</button>
            // </li>

            <Link
              className="m-3 px-3 rounded-md bg-yellow-200"
              key={i}
              href={`profile/${i + 1}`}
            >
              user n°{i + 1}
            </Link>
          ))}
          <Link
            href={{
              pathname: "/profile/3",
              query: {
                username: "Cyrille",
                age: 23,
              },
            }}
          >
            Ma page
          </Link>
        </div>

        <div>Utilisateur setter : {state.name}</div>
        <input
          onChange={(e) => setState({ ...state, name: e.target.value })}
          type="text"
          name="user"
          id="user"
          value={state.name}
        />
      </div>
    </>
  );
}

export default Profile;
