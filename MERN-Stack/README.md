# Differences

- Use `vite` instead of `CRA`
  - `dist` folder instead of `build`
    - `app.use(express.static(path.join(__dirname, "dist")))`;
  - no favico -> remove `serve-favicon`

## express.static

creates route for every file in the folder `dist`

## setup proxy for vite

<https://vitejs.dev/config/server-options.html#server-proxy>

Proxy is for development, so that URLs like `/api/users` will work

## org

everything in `src` -> React
everything outside -> express

## Routes

/api/??? -> express Routes
/??? -> react router router

## User Story -> Signup

- goto /signup -> see the signup form
  - react router route -> /signup -> form
- Key in name, password, email
- Press submit button
- Reroute to Homepage

- Pass the state (controlled) of the form to something

- sending a fetch request -> POST (creating user) -> REST -> /api/users/
  - routes, controllers
- /api/XXX -> express route, /signup -> react router
- Create User in the database
  - controller -> model (schema)
- - send back a response