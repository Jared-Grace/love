import { folder_public_combine } from "./folder_public_combine.mjs";
export function functions_path() {
  const second = "src";
  let joined = folder_public_combine(second);
  return joined;
}
