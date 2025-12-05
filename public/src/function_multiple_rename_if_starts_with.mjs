import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_rename_if_starts_with(
  f_name_prefix,
  f_name_after,
) {
  marker("1");
  await each_async(list, async function lambda(item) {});
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
