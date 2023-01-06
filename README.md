# Facebook-like portal. 
Demo  website that simulates Facebook UI. Users can login using their google credentials and make posts with pictures. It is responsive design so it can fit from mobile to desktop screens.

To try it out please go to: https://fbclone2.vercel.app/
<p/>IMPORTANT: In order to log in it is required to use a Google account since the system uses NextAuth to get the user's name and save his/her posts in the database associated with him/her. 
<p/>The first screen will show a button asking to login with Google. Once clicked on that button, the application will redirect to the NextAuth sign in page which lists two options: Sign in with Facebook and Sign in with Google. 
Please, ignore the option to sign in with Facebook since that functionality is not yet implemented.
Once signed in with Google the app will get your username and display it in the right side of the page. Now, you can post and attach pictures, and every post you make will be displayed in a chronological order (most recent first).

## Technologies:
- ReactJs 
- NextJs
- NextAuth
- TailwindCSS
- Firebase 
- Firestore
- Redux

## Screenshots:

<img src="https://github.com/rccc7/rccc-resume/blob/main/public/images/portfolio/Facebook-react.jpg" alt="screenshot" width="700"/>


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Disclaimer

This is just a clone for testing and practice purposes only.

Images and attribution:

- Facebook Logo obtained from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Facebook_f_Logo_(with_gradient).svg)
- Jeff Bezos: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos,_May_5,_2016_(1)_(cropped).jpg)
- Elon Musk: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Elon_Musk_Royal_Society.jpg)
- Mark Zukerberg: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mark_Zuckerberg_em_setembro_de_2014.jpg)
- Bill Gates: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bill_Gates_at_2019_ARPA-E.jpg)
- iJustine: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:IJustine_2015.jpg)
- Luisito Comunica: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Luisito_Comunica.jpg)
- Neo - Matrix: [Flickr](https://www.flickr.com/photos/nunoluciano/5396200604/sizes/o/)

## Step by Step Setup & Deployment Instructions from scratch:

If you want to test directly on your computer clone the repository and then 

    npm install
    
First, run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```
    
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

1. Create the Next JS project:
    ```bash
    npx create-next-app fbclone-2
    ```
2. Install tailwindcss from https://tailwindcss.com/
    ```bash
    npm install tailwindcss
    ```
3. Delete the file styles\Home.module.css.
4. Delete everything inside the file styles\global.css.
5. Install tailwindcss. Follow the instructions for NextJS at: https://tailwindcss.com/docs/installation which will take to the following link: https://tailwindcss.com/docs/guides/nextjs --> There, it explains the procedure to install tailwindcss: Run the following comand in a terminal:
    ```bash
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    ```
6. Create the configuration files:
    ```bash
    npx tailwindcss init -p
    ```
7. Conifgure tailwindcss to remove unused styles in production (instructions described in the link above)
8. Include tailwind in our CSS, configuring the './styles/global.css' file as described also in the instructions link above
9. Restart the server so that all the changes we just configured will take effect.
10. Create the folder components where we'll add the component files
11. Install heroicons. For instructions go to https://heroicons.com/ and then clic the "Documentation" button
    ```bash
    npm install @heroicons/react
    ```
12. Install next-auth:
    
    npm install --save next-auth
    
    Files which must be edited in order to adapt the session:
        pages/_app.js
        pages/index.js
        components/Login.js -->This is actually the file in which we call the sigIn from next-auth
        env.local --> Here, is where we store the sensitive data: The client Id and the Secret obtained from either google or facebook
13. Add firebase extension:
    ```bash
    npm i firebase
    ```
    
Remember, in order to enable upload images to firebase storage, we must go to the rules section and enable in the same way as we enable the access to the firestore database.

14. Install react-firebase-hooks
    ```bash
    npm install --save react-firebase-hooks
    ```

15. Install tailwind-scrollbar-hidden plugin to enable scrollbar hiding
    ```bash
    npm install tailwind-scrollbar-hide
    ```
In order to enable this plugin edit the tailwind.config.js file and add the require statement in the plugins section

16 Deploy on github.
17. DEPLOY on Vercel: Inside Vercel account create a new project and import the fbclone2 repository created in github, and then select "personal account" as Vercel Scope, then keep the project name as fbclone2. IMPORTANT: In the section where it asks for environment variables add the variables defined in the .env.local file including the NEXTAUTH_URL but in this case instead of localhost insert this value: NEXTAUTH_URL=fbclone2.vercel.app. That key will be encrypted by vercel, so we don't have to worry when we upload that info. Finally, click on deploy.

18. Inside the google account add this URI https://fbclone2.vercel.app/api/auth/callback/google to the list of URIs accepted to acces the google signin

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
