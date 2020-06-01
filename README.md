# contact-keeper

A tutorial from [React Front to Back](https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969936#overview) on Udemy.

### bugs encountered while following tutorial:

- import uuid from 'uuid' not working
  > uuid version 8.1.0 requires : import {v4 as uuid} from 'uuid'
- TypeError: Cannot read property 'charAt' of undefined
  > needed to add DELETE_CONTACT as a type in types.js
  > I just copied and pasted all types from the tutorial's [github](https://github.com/bradtraversy/contact-keeper/blob/master/client/src/context/types.js) so I wouldn't have to worry about it for the rest of the time.
- cannot destructure 'name' from 'contacts'
  > forgot to add 'current: state.current; to ContactContext.Provider
- Expected an assignment or function call and instead saw an expression
  > I usually do my maps as arr.map(e => { //do smth }), but I kept getting this error and solved it by taking out the {} brackets in my map call.
- onSubmit not working (for me, specifically onSubmit for Register.js)
  > I put onSubmit={onSubmit} in the <input type="submit" /> for Register.js. However, it is supposed to be in the form start tag --> <form onSubmit={onSubmit}></form>
- When updating contact, the Name got replaced with the Contact Type (only on update and not on add)
  > Tried looking for any errors. Tried copy & pasting the exact code from tutorial github of parts edited for this sectoin. Could not fix it.
  > Git stashed (and stash clear) back to point after Login/Register finished, so restarted to Section 10, part 68. Edit/Update button worked fine
- Proxy error: Could not proxy request /api/auth from localhost:3000 to localhost:5000
  > added `"secure": false` to client/package.json
  > followed [this guide](https://medium.com/@bryantjiminson/solving-proxy-error-could-not-proxy-request-xxx-from-yyy-from-local-reactjs-app-to-nodejs-app-f28f3548afb9)
- events.js:200 throw er; //unhandled 'error' event
  > when getting general bugs, I thought this was the source. It was not. As far as I can tell... it didn't effect development for me?
  > If you want to look into it though, I did try this [link](https://levelup.gitconnected.com/how-to-kill-server-when-seeing-eaddrinuse-address-already-in-use-16c4c4d7fe5d)

Figured it'd be helpful to mention some bugs I had since I spent a chunk of time googling until I was like oooh duh
