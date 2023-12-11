import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        identifier: { label: "Email or Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // Replace with your actual login logic
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });

          const user = await response.json();

          if (user) {
            return Promise.resolve(user); // Make sure the user object contains necessary fields
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          return Promise.reject(error);
        }
      },
    }),
  ],
  callbacks: {
    async session(session, user) {
      try {
        // Set user information directly from the login response
        session.user = {
          userId: user.userId,
          username: user.username,
          email: user.email,
          role: user.Role,
          accessToken: user.accessToken, // Make sure to include the access token
        };

        return Promise.resolve(session);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async signOut() {
      // Your custom sign-out logic, e.g., redirect to a specific URL
      return Promise.resolve('http://localhost:5000/logout');
    },
  },
});





// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         identifier: { label: "Email or Username", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         try {
//           // Replace with your actual login logic
//           const response = await fetch('http://localhost:5000/login', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(credentials),
//           });

//           const user = await response.json();

//           if (user) {
//             return Promise.resolve(user);
//           } else {
//             return Promise.resolve(null);
//           }
//         } catch (error) {
//           return Promise.reject(error);
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async session(session, user) {
//       try {
//         // Fetch additional user details from your API
//         const response = await fetch('http://localhost:5000/me', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${user.accessToken}`, // Add appropriate headers, e.g., token
//           },
//         });

//         const userDetails = await response.json();

//         // Set user information in the session
//         session.user = {
//           userId: userDetails.userId,
//           username: userDetails.username,
//           email: userDetails.email,
//           role: userDetails.Role,
//           // ... other user details
//         };

//         return Promise.resolve(session);
//       } catch (error) {
//         // Handle error, e.g., log it or reject the Promise with an error message
//         console.error('Session error:', error);
//         return Promise.reject(new Error('Failed to fetch user details'));
//       }
//     },
//     async signOut() {
//       // Your custom sign-out logic, e.g., redirect to a specific URL
//       return Promise.resolve('http://localhost:5000/logout');
//     },
//   },
// });
