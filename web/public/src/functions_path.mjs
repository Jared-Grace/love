import {folder_public_combine} from './folder_public_combine.mjs';
import {path_join} from "./path_join.mjs";
import {folder_public} from "./folder_public.mjs";
export function functions_path() {
  const second = "src";
  let joined = folder_public_combine(second);
  return joined;
}
