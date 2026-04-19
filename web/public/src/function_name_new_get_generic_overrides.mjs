import { function_name_parts_delete_comma } from "../../../love/public/src/function_name_parts_delete_comma.mjs";
import { function_name_part_insert } from "../../../love/public/src/function_name_part_insert.mjs";
import { function_name_to_part_replace_last_3 } from "../../../love/public/src/function_name_to_part_replace_last_3.mjs";
import { function_name_to_part_replace_last_2 } from "../../../love/public/src/function_name_to_part_replace_last_2.mjs";
import { function_name_to_part_replace_last } from "../../../love/public/src/function_name_to_part_replace_last.mjs";
import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { function_name_parts_swap_end } from "../../../love/public/src/function_name_parts_swap_end.mjs";
import { lambda_right } from "../../../love/public/src/lambda_right.mjs";
import { function_name_part_last_delete } from "../../../love/public/src/function_name_part_last_delete.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export function function_name_new_get_generic_overrides() {
  let r2 = {
    c: function_name_combine,
    d: function_name_parts_delete_comma,
    i: function_name_part_insert,
    l: function_name_part_last_delete,
    r: lambda_right,
    s: function_name_parts_swap_end,
    t: text_replace,
    1: function_name_to_part_replace_last,
    2: function_name_to_part_replace_last_2,
    3: function_name_to_part_replace_last_3,
  };
  return r2;
}
