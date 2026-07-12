import { text_replace } from "./text_replace.mjs";
export function firebase_path_fix(path) {
  let replaced = text_replace(path, "\\", "/");
  return replaced;
}
