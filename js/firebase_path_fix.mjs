import { string_replace } from "../../../love/public/src/string_replace.mjs";
export function firebase_path_fix(path) {
  let replaced = string_replace(path, "\\", "/");
  return replaced;
}
