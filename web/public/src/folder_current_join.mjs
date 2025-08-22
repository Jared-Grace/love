import { folder_current } from "./folder_current.mjs";
export function folder_current_join(result) {
  let current = folder_current();
  let value_string = current + "/" + result;
  return value_string;
}
