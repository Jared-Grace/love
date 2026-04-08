import { function_name_parts_delete } from "../../../love/public/src/function_name_parts_delete.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
export function function_name_parts_delete_comma(f_name_old, deleteds_comma) {
  let split = text_split_comma(deleteds_comma);
  let f_name_new = function_name_parts_delete(f_name_old, split);
  return f_name_new;
}
