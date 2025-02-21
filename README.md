# Firebase onAuthStateChanged Listener Glitch

This repository demonstrates a subtle bug in Firebase's `onAuthStateChanged` listener where rapid authentication state changes can be missed.  The issue arises when multiple login/logout events occur quickly, potentially leading to inconsistencies in your application's user state management. The provided code showcases the problem and a potential mitigation strategy.

## Setup

1.  Clone the repository.
2.  Install dependencies: `npm install firebase`
3.  Configure Firebase (replace placeholders with your Firebase config).

## Bug Reproduction

Run `firebaseBug.js`. You might observe that the console logs don't always reflect the actual authentication changes if you quickly trigger login/logout. 

## Solution

The `firebaseBugSolution.js` file offers a potential solution using debouncing or a state management technique to manage the rapid changes more effectively. It limits the frequency of state checks to avoid missing updates. 