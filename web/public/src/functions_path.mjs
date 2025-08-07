import {path_join} from './path_join.mjs';
import {folder_public} from './folder_public.mjs';
export function functions_path() {
  let second = [folder_public(), "src"];
  let joined = path_join(second);
  return joined;
}
