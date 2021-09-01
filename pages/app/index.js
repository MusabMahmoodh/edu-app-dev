import { signOut } from "firebase/auth";
import { auth } from "../../firebase/initFirebase";
import React from "react";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();
  const userSignOut = () => {
    signOut(auth)
      .then(async () => {
        await router.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <h4>DashBoard</h4>
      <button onClick={userSignOut}>Sign Out</button>
    </div>
  );
}
