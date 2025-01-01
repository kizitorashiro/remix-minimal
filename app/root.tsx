import {
  Scripts,
} from "@remix-run/react";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <h1>Hello, Remix-Minimal</h1>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount((c) => c + 1)}>Increment Counter</button>
        <Scripts />
      </body>
    </html>
  );
}
