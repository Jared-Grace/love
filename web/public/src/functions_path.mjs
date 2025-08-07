import {folder_public} from './folder_public.mjs';
import path from "path";
export function functions_path() {
  let second = ["public", "src"];
  let joined = path.join(...second);
  return joined;
  folder_public();
}
