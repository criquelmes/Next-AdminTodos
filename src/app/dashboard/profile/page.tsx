"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();
  useEffect(() => {
    console.log("Client Side");
  }, []);
  return (
    <div>
      <h1>Profile Page</h1>
      <hr />
      <div className="flex flex-col mt-3">
        <span>{session?.user?.name!}</span>
        <span>{session?.user?.email!}</span>
        <span>{session?.user?.image!}</span>
        <span>{session?.user?.id!}</span>
        <span>{session?.user?.roles!.join(",")}</span>
      </div>
    </div>
  );
}
