import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_name_to_part_last } from "../../../love/public/src/function_name_to_part_last.mjs";
import { function_copy_replace } from "../../../love/public/src/function_copy_replace.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_copy_replace_last(f_name_old, to) {
  assert_arguments(arguments, 2);
  marker("1");
  let from = function_name_to_part_last(f_name_old);
  let v = await function_copy_replace(f_name_old, from, to);
  return v;
}
