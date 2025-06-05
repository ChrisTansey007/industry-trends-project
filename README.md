# Industry Trends Project (React)

This project is a React application served by a small Express server. The React app lives in the `client` folder and is built with Create React App. Legacy HTML, CSS, and JavaScript files have been removed.

## Running Locally

1. Install Node.js (v18+ recommended).
2. Install dependencies for both server and client:
   ```bash
   npm install
   cd client && npm install
   ```
3. Build the React app and start the server:
   ```bash
   npm run build --prefix client
   npm start
   ```
4. Open your browser to [http://localhost:3000](http://localhost:3000) to view the site.

The Express server serves the production build from `client/build`.

## Development Mode

If you want to work on the React application without creating a production
build, you can run the development server directly:

```bash
npm start --prefix client
```

This command starts the Create React App development server at
[http://localhost:3000](http://localhost:3000) and automatically reloads the
page when you save changes.

## Verifying the Server

After running `npm start`, you can confirm the server is serving the app by visiting `http://localhost:3000` or using `curl`:

```bash
curl http://localhost:3000
```

You should see the HTML for the React application, including the title `Industry Trends React App`.

## Running Tests

Run the React test suite after installing dependencies:

```bash
npm test --prefix client
```

You can also run it from within the `client` directory:

```bash
cd client
npm test
```

This ensures that `react-scripts` from the client dependencies is available when executing the tests.
