import { function_rename_part_insert_at } from "../../../love/public/src/function_rename_part_insert_at.mjs";
export async function function_rename_part_insert(
  f_name_before,
  part,
  index_string,
) {
  let v = await function_rename_part_insert_at(
    f_name_before,
    part,
    index_string,
  );
  return v;
}
