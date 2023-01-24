import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex justify-center h-screen items-center flex-col space-y-6">
        <div>
          <h1 className="text-6xl font-bold text-white hover:bg-blue-600 rounded-lg cursor-pointer transition ease-in duration-100 py-2">
            DevEx
          </h1>
          <p className="text-2xl mt-2 text-xl text-gray-200 font-bold">
            👋 Where <span className="text-blue-400">De</span>velopers{" "}
            <span className="text-blue-400">Ex</span>change
          </p>
        </div>
        <div className="w-[18rem] space-y-3">
          <button className="w-full p-2 hover:translate-y-[-2px] transition ease-in duration-100 rounded-full bg-blue-600 font-bold text-gray-100">
            Sign in with GitHub
          </button>
          <button className="w-full p-2 hover:translate-y-[-2px] transition ease-in duration-100 rounded-full border-2 font-bold text-gray-100">
            Source Code
          </button>
          <p className="text-center text-gray-200 font-bold text-xs">
            Built with 💖 by <a href="//github.com/atomisadev">Atom</a>
          </p>
        </div>
      </div>
    </>
  );
}
