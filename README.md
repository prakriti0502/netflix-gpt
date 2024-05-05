## Netflix GPT
    - Create react app
    - Configured Tailwind CSS
    - Created login screen
    - Ceated Header
    - Routing
    - Sign up form
    - Form Validation
    - useRef Hook
    - Firebase setup
    - Deploying app to prod
    - Create sign up user account
    - implemented sign-in user api
    - created redux store with userSlice
    - implemented sign-out functionaity
    - update profile api call.
    - BugFix: 
        - Sign up user display name and profile picture update
        - If the user is not logged-in, redirect /browse to login page, and vice-versa.
    - unsubscribed to the onAuthStateChanged callback.
    - Add hardcoded values to constants file.
    - Register for TMDB api & create an app, and get access token.
    - Get data from TMDB now playing movie list api.
    - Custom hook for now playing movies.
    - create movie slice.
    - updated store with movies data.
    - planning for main container and secondary container
    - fetch data for trailer video.
    - update store with trailer video data.
    - embedded the youtube video, made it autoplay and mute.
    - added tailwind to make the main container look good.
    - build secondary container
    - build movie list
    - build movie card
    - TMDB image CDN URL
    - Made The Movie List component look good using tailwind css
    - usePopularMovies, useTopRatedMovies, useUpcomingMovies custom hook
    - added tailwind plugin in tailwindConfig to have a class that disappears scrollbar but still maintains the scrolling effect.
    - GPT Search Page
    - GPT Search Bar
    - Multilingual Feature
    - Integrate GPT APIs

## Features
    1. Login/Sign-up
        - Sign-in/Sign-up form
        - Redirect to browse page
    2. Browse (after authentication)
        - Header
        - Main Movie
            - Trailer in bg
            - Title and Desc
            - MovieSuggestions
                - MovieLists*N
    3. NetflixGPT
        - Search Bar
        - Movie Suggestions

## Steps to deploy your app on firebase
    0. Install firebase CLI - 'npm i -g firebase-tools'
    1. Firebase login - 'firebase login'
    2. Initialise firebase - 'firebase init'
    3. Deploy command - 'firebase deploy'