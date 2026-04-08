import { function_name_part_insert_at } from "../../../love/public/src/function_name_part_insert_at.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function part_insert_at(f_name_before, index_string, part) {
  let f_name_after = function_name_part_insert_at(
    f_name_before,
    index_string,
    part,
  );
  let r = await function_wrap(f_name, f_name_wrapped);
  return r;
}
