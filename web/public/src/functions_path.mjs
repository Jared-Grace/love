import {folder_public} from './folder_public.mjs';
import path from "path";
export function functions_path() {
  let second = [folder_public(), "src"];
  let joined = path_join(second);
  return joined;
}
function path_join(second) {
    return path.join(...second);
}

