import {
  Scripts,
  useLoaderData,
} from "@remix-run/react";

import { useState } from "react";

export const loader = () => {
  console.log("Remix loader root.tsx");
  return ({ items: [
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "melon" },
  ]});
}

export default function App() {

  const { items } = useLoaderData<typeof loader>();
  console.log(`items: ${JSON.stringify(items)}`);

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
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        Item[{count}]: {items[count]?.name || "none"}
        <Scripts />
      </body>
    </html>
  );
}
