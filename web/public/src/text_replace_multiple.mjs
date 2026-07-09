import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function text_replace_multiple(t, from, to) {
  let replaced = text_replace(t, from, to);
  return replaced;
}
