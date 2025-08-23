import { folder_src } from "./folder_src.mjs";
import { folder_public_combine } from "./folder_public_combine.mjs";
export function functions_path() {
  const second = folder_src();
  let joined = folder_public_combine(second);
  return joined;
}
