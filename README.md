## Headphones

## usefull commands

#### created a module with component and routing and hangs the module in to ap module routing

ng g module --module=app.module --route=#newComponent #newComponent --routing

## Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyChy16KhjospA3OrrT9e_10yma1IQTITHM",
authDomain: "headphone-project.firebaseapp.com",
projectId: "headphone-project",
storageBucket: "headphone-project.appspot.com",
messagingSenderId: "636300857082",
appId: "1:636300857082:web:ef583d1b5fc46fe5e38343",
measurementId: "G-JQRG3C8B9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

#### Project Setup

start up

eslint
doc - https://compodoc.github.io/compodoc/
e2e
formatter -- prettier

language @ngx-translate/core
core  
shared

layout

# Project Log

### 07.11.2021

- added the eslint with airbnb configuration
- added pretifier
- added husky with precommit config
- added core and shared module
  -- core module has error handling / http-error && app-error
- added shared module with material
- added cypress
- added login && home module + related components:
- added github pages

Problem to solve right now,
-Make the error handling work. like in the demo -> https://pkief.medium.com/global-error-handling-in-angular-ea395ce174b1

- let linter run correct.
- make github pages work

### 16.11.2021

- call with ramy
- nüm script config
- "start:pwa": "http-server -p 8080 -c-1 dist/robotic-suite-next-gen",
  "write:env": "ngx-scripts env npm_package_version",
  "format": "prettier \"src/**/\*.{ts,js,html,md,scss,json}\" --write && tslint --fix -c ./tslint.json 'src/**/\*.{ts,js}'",
  "analyze": "ng build --stats-json && webpack-bundle-analyzer ./dist/robotic-suite-next-gen/stats.json --port 8890",
  "compodoc": "npx compodoc -p tsconfig.doc.json --theme stripe",
  "compodoc:start": "compodoc -p tsconfig.doc.json --theme s

- setup new project
  - steps
  1. linter and prettier
  2. husky. https://typicode.github.io/husky/#/
  3. compudoc

# 20.11.2021

added folder
-core -

take all components
see commons things
make a core class
-ask yourself - would i use it-

# 21.11.2021
