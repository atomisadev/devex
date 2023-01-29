"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import Button from "../../../components/DevUI/Button";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/");
  } else
    return (
      <>
        <div className="flex flex-row gap-5 items-center p-10">
          <Image
            src={session.user?.image!}
            alt={session.user?.name!}
            height={100}
            width={100}
            className="rounded-full"
          />
          <h1 className="text-white text-3xl">
            You are logged in as{" "}
            <span className="font-bold">{session.user?.name}</span>
          </h1>
        </div>
        <div className="pl-10">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-primary hover:bg-primaryLighter px-4 py-2 text-sm text-white font-medium rounded-md"
          >
            Sign out
          </button>
        </div>
      </>
    );
}
