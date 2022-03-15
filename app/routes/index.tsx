import { useState } from "react";
import { ClientOnly } from "remix-utils";
import { Editor } from "../Editor.client";
import QuillCSS from "react-quill/dist/quill.snow.css";

import type { LinksFunction } from "remix";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: QuillCSS },
];

export default function Index() {
  const [value, setValue] = useState("");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>

      <ClientOnly>
        {() => (
          <Editor
            value={value}
            onChange={setValue}
          />
        )}
      </ClientOnly>
    </div>
  );
}
