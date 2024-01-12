# Differences

- Use `vite` instead of `CRA`
  - `dist` folder instead of `build`
    - `app.use(express.static(path.join(__dirname, "dist")))`;
  - no favico -> remove `serve-favicon`

## express.static

creates route for every file in the folder `dist`

## setup proxy for vite
