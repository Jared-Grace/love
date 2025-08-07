import { path_join } from "./path_join.mjs";
import { folder_public } from "./folder_public.mjs";
export function functions_path() {
    const second = "src";
  let joined = path_join([folder_public(), second]);
  return joined;
}
