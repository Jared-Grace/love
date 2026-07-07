import { error } from "../../../love/public/src/error.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function error_combine_multiple(list) {
  let combined = text_combine_multiple(list);
  error(combined);
}
