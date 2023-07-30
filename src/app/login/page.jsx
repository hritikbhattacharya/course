"use client";
import { useState } from "react";
import supabase from "../../config/supabase";
import course from "../../../database/courseData";
import Image from "next/image";



export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLogout, setLogout] = useState(true);

  async function login() {
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    console.log(data);

    alert("login success");
    setIsLogin(true);
    setLogout(false)
  }

  async function getData() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
  }

  async function logout() {

    let { error } = await supabase.auth.signOut()
    alert("logout success");
    setLogout(true)

  }

  return (
    <div >

      {isLogin && !isLogout ? (
        <div className="flex flex-col justify-center items-center">
          <div className="w-full bg-black  flex justify-center items-center text-white"> <button
            className="p-1 m-2 border border-solid border-white bg-transparent  rounded-md   hover:bg-white hover:text-black"
            onClick={logout}
          >
            LOGOUT
          </button>


          </div>
          <div className="flex flex-wrap justify-evenly  items-center ">
            {course.map((c, i) => {
              return (

                <div className="border rounded-md border-gray-500 w-96 mx-4 my-4 flex flex-col items-center shadow-md shadow-slate-500" key={i}>
                  <Image
                    className="rounded-md"
                    src={c.image_link}
                    width={500}
                    height={500}
                    placeholder="image"

                    alt="Cover image"
                  />
                  <h1 className="my-3 font-bold text-base">{c.course_name}</h1>

                  <p className="font-semibold text-sm">{c.description}</p>

                </div>

              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center p-4 h-[100vh] bg-teal-200">
          <div className=" p-4 w-auto h-56 shadow-md shadow-slate-700 border border-solid rounded-md border-black bg-slate-500 flex flex-col justify-center items-center">
            <label htmlFor="" className="text-white mt-4">Email</label>
            <input
              value={email}
              type="email"
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="text-white">Password</label>

            <input
              value={password}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="p-1 mt-4 bg-teal-200 border border-black rounded-md hover:bg-teal-600"
              onClick={login}
            >
              LOGIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
