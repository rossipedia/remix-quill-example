import ReactQuill from "react-quill";
import type { ComponentProps } from "react";
import hljs from "highlight.js";

export function Editor(props: ComponentProps<typeof ReactQuill>) {
  return (
    <ReactQuill
      modules={{
        syntax: {
          highlight: (text: string) => hljs.highlightAuto(text).value,
        },
        toolbar: [["code-block"]],
      }}
      {...props}
    />
  );
}
