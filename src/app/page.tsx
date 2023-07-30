"use client";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-teal-200 " >
      <div className="mb-10 items-center">
        <h1 className="text-4xl font-extrabold">GET AMAZING COURSES</h1>
        <p className="text-md">get the courses on your finger tips and become job ready ..</p>
      </div>

      <div className="flex flex-row justify-center items-center">
        <Link className="shadow shadow-gray-400 border-solid border-3 border-black px-6 py-2 rounded-md bg-teal-500 hover:bg-teal-700 " href="/login">Getting started</Link>
      </div>

    </div>
  );
}
