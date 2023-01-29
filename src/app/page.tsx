"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    return router.push("/dashboard");
  } else
    return (
      <>
        <div className="flex h-screen flex-col items-center justify-center gap-7">
          <div>
            <div className="flex gap-2">
              <h1 className="text-5xl font-bold text-gray-200 md:text-7xl">
                DevEx
              </h1>
              <div className="flex h-[1.5rem] w-[3rem] items-center justify-center rounded-full bg-primary p-1 text-xs font-semibold transition duration-100 ease-in hover:translate-y-[-2px] hover:bg-primaryLighter">
                v0.1.0
              </div>
            </div>

            <p className="text-lg font-semibold text-gray-200 md:text-xl">
              Where developers exchange
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => signIn()}
              className="text w-[14rem] rounded-full bg-primary p-2 text-sm font-semibold shadow-lg transition duration-100 ease-in hover:translate-y-[-2px] hover:bg-primaryLighter md:w-[16.5rem]"
            >
              Sign in with GitHub
            </button>
            <button className="text w-[14rem] rounded-full bg-primary/20 p-2 text-sm font-semibold text-gray-200 shadow-lg transition duration-100 ease-in hover:translate-y-[-2px] hover:bg-primary/30 md:w-[16.5rem]">
              Source code
            </button>
            <div className="flex justify-center">
              <p className="text-xs font-semibold text-gray-300">
                Built with 💖 by Atom
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
