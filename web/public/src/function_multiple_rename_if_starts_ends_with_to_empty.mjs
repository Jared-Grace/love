import { function_multiple_rename_if_starts_ends_with } from "../../../love/public/src/function_multiple_rename_if_starts_ends_with.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_rename_if_starts_ends_with_to_empty(
  f_name_prefix,
  f_name_suffix_before,
) {
  marker("1");
  let v = await function_multiple_rename_if_starts_ends_with(
    f_name_prefix,
    f_name_suffix_before,
    "",
  );
  return v;
}
