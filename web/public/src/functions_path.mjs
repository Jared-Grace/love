import { folder_src } from "../../../love/public/src/folder_src.mjs";
import { folder_public_join } from "../../../love/public/src/folder_public_join.mjs";
export function functions_path() {
  const second = folder_src();
  let joined = folder_public_join(second);
  return joined;
}
