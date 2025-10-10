import { folder_src } from "../../../love/public/src/folder_src.mjs";
import { folder_public_combine } from "../../../love/public/src/folder_public_combine.mjs";
export function functions_path() {
  const second = folder_src();
  let joined = folder_public_combine(second);
  return joined;
}
