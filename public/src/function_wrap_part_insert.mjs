import { function_wrap_part_insert_at } from "../../../love/public/src/function_wrap_part_insert_at.mjs";
export async function function_wrap_part_insert(
  f_name_before,
  index_string,
  part,
) {
  let r = await function_wrap_part_insert_at(f_name_before, index_string, part);
  return r;
}
