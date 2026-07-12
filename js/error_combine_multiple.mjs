import { error } from "./error.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function error_combine_multiple(list) {
  let combined = text_combine_multiple(list);
  error(combined);
}
