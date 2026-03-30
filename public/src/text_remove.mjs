import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function text_remove(t, removal) {
  let empty = "";
  let replaced = text_replace(t, removal, empty);
  return replaced;
}
