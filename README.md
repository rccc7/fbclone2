Facebook-like portal. Demo  website that simulates Facebook UI. Users can login using their google credentials and make posts with pictures. It is responsive design so it can fit from mobile to desktop screens.

To try it out please go to: https://fbclone2.vercel.app/
<p/>IMPORTANT: In order to log in it is required to use a Google account since the system uses NextAuth to get the user's name and save his/her posts in the database associated with him/her. 
<p/>The first screen will show a button asking to login with Google. Once clicked on that button, the application will redirect to the NextAuth sign in page which lists two options: Sign in with Facebook and Sign in with Google. 
Please, ignore the option to sign in with Facebook since that functionality is not yet implemented.
Once signed in with Google the app will get your username and display it in the right side of the page. Now, you can post and attach pictures, and every post you make will be displayed in a chronological order (most recent first).

Technologies:
- ReactJs 
- NextJs
- NextAuth
- NextAuth
- TailwindCSS
- Firebase 
- Firestore
- Redux

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
