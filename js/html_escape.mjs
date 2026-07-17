import { text_replace } from "./text_replace.mjs";
export function html_escape(t) {
  let a = text_replace(t, "&", "&amp;");
  let b = text_replace(a, "<", "&lt;");
  let c = text_replace(b, ">", "&gt;");
  return c;
}
