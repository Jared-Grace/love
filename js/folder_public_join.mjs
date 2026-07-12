import { folder_public } from "./folder_public.mjs";
import { path_join } from "./path_join.mjs";
export function folder_public_join(f_path) {
  let result = folder_public();
  let combined = path_join([result, f_path]);
  return combined;
}
