import { function_name_parts_remove } from "../../../love/public/src/function_name_parts_remove.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
export function function_name_parts_remove_comma(f_name_old, deleteds_comma) {
  let split = text_split_comma(deleteds_comma);
  let f_name_new = function_name_parts_remove(f_name_old, split);
  return f_name_new;
}
