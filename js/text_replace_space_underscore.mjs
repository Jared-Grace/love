import { text_replace } from "./text_replace.mjs";
export function text_replace_space_underscore(t) {
  let replaced = text_replace(t, " ", "_");
  return replaced;
}
