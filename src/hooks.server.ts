import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const handle = SvelteKitAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
    callbacks: {
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
          }
    }

})

