"use client";
import { signIn, signOut } from "next-auth/react"

export default function Appbar  () {
    return <div>
    <button className="text-blue-500 text-3xl" onClick={() => signIn()}>Signin</button>
    <button onClick={() => signOut()}>Sign out</button>
  </div>
}