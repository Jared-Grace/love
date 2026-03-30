import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function text_remove(from, removal) {
  let empty = "";
  let replaced = text_replace(from, removal, empty);
  return replaced;
}
