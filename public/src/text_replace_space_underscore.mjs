import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function text_replace_space_underscore(name_old) {
  let replaced2 = text_replace(name_old, " ", "_");
  return replaced2;
}
