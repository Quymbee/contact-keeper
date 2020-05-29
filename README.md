# contact-keeper

A tutorial from [React Front to Back](https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969936#overview) on Udemy.

#### bugs encountered while following tutorial:

- import uuid from 'uuid' not working
  > uuid version 8.1.0 requires : import {v4 as uuid} from 'uuid'
- `TypeError: Cannot read property 'charAt' of undefined`
  > forgot to add 'current: state.current; to ContactContext.Provider
  > also needed to add in types.js
- `events.js:200 throw er; //unhandled 'error' event`
  > when getting general bugs, I thought this was the source. It was not. As far as I can tell... it didn't effect development for me?
  > If you want to look into it though, I did try this [link](https://levelup.gitconnected.com/how-to-kill-server-when-seeing-eaddrinuse-address-already-in-use-16c4c4d7fe5d)

^^^Figured it'd be helpful to mention some since I spent a chunk of time googling until I was like oooh duh
