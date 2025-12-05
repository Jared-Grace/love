import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_rename_if_starts_with(
  f_name_prefix,
  f_name_after,
) {
  marker("1");
  $ea;
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
