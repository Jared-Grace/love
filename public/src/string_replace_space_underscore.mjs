import { string_replace } from "../../../love/public/src/string_replace.mjs";
export function string_replace_space_underscore(name_old) {
  let replaced2 = string_replace(name_old, " ", "_");
  return replaced2;
}
