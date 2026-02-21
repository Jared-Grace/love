import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function firebase_path_fix(path) {
  let replaced = text_replace(path, "\\", "/");
  return replaced;
}
