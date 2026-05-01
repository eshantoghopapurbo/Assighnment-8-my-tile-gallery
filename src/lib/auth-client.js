import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://assighnment-8-my-tile-gallery.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()