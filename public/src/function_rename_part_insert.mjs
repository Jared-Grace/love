import { null_not_is_assert } from "../../../love/public/src/null_not_is_assert.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_part_insert(
  f_name_before,
  part,
  index_string,
) {
  marker("1");
  let index = integer_to_try(index_string);
  null_not_is_assert(a);
  let parts = function_name_to_parts(f_name_before);
  list_insert(parts, index, part);
  let f_name_after = function_name_combine_multiple(parts);
  await function_rename(f_name_before, f_name_after);
}
