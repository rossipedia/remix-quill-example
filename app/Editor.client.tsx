import ReactQuill from "react-quill";
import type { ComponentProps } from "react";


export function Editor(props: ComponentProps<typeof ReactQuill>) {
  return <ReactQuill {...props} />;
}
