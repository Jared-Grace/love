import { text_replace } from "./text_replace.mjs";
export function text_replace_to_space(t, from) {
  let replaced = text_replace(t, from, " ");
  return replaced;
}
