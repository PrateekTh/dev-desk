"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <div className="p-2 border rounded-lg border-white flex flex-col w-1/3 text-center justify-items-center">
                <h1 className="font-[family-name:var(--font-geist-mono)]">Not signed in</h1> <br />
                <button className="mx-auto md:w-1/2 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" onClick={() => signIn()}>Sign in</button>
            </div>
        </>
    )
}