import { folder_public } from "./folder_public.mjs";
import { path_join } from "./path_join.mjs";
export function folder_public_combine(second) {
  return path_join([folder_public(), second]);
}
