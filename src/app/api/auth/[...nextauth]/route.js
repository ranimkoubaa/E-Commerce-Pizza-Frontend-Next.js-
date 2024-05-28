/*import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
        },
        password: {
          label: "password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          const res = await fetch("http://localhost:3001/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
          const response = await res.json();
          console.log(response);
          if (response.success === false) {
            throw new Error("Invalid credentials");
          }
          if (response.user) {
            console.log(response.user);
            return {
              ...response.user,
              password: null,
              role: response.user.role,
              image: response.user.avatar,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: "efdec0fb94f9561b48ed",
      clientSecret: "c5ff005481e7e4bc7bd81362f6a466286d053126",
    }),
    GoogleProvider({
      clientId:"1011153502020-oq7ae08crgb1gs4no95urf3tkcc0te5t.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.image = token.image;
      }
      return session;
    },
  },
  redirects: {
    async afterCallback({ url, baseUrl }) {
      return baseUrl; // Redirect to the root URL after login
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
*/import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
providers: [
CredentialsProvider({
name: "Credentials",
credentials: {
email: {
label: "email:",
type: "text",
},
password: {
label: "password:",
type: "password",
},
},
async authorize(credentials) {
try {
const res = await fetch("http://localhost:3001/api/users/login", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
email: credentials?.email,
password: credentials?.password,
}),
});
const response = await res.json();
console.log(response)
if (response.success===false) {
throw new Error("Invalid credentials");
}
if (response.user) { console.log(response.user)
return { ...response.user, password: null, role:
response.user.role , image: response.user.avatar};
} else {
return null;

}
} catch (error) {
console.log(error);
}
return null;
},
}),
GitHubProvider({
clientId: "efdec0fb94f9561b48ed",
clientSecret: "c5ff005481e7e4bc7bd81362f6a466286d053126",
}),
GoogleProvider({
clientId: "1011153502020-oq7ae08crgb1gs4no95urf3tkcc0te5t.apps.googleusercontent.com",
clientSecret: "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"
})
],
secret: process.env.SECRET,
callbacks: {
async jwt({ token, user }) {
if (user){
token.role = user.role;
token.image = user.image;
}
return token;
},
async session({ session, token }) {
if (session?.user) {
session.user.role = token.role;
session.user.image = token.image;
}
return session;
},
},
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }