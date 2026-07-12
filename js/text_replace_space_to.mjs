import { text_replace } from "./text_replace.mjs";
export function text_replace_space_to(t, to) {
  let replaced = text_replace(t, " ", to);
  return replaced;
}
