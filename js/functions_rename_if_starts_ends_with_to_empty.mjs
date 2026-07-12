import { functions_rename_if_starts_ends_with } from "./functions_rename_if_starts_ends_with.mjs";
export async function functions_rename_if_starts_ends_with_to_empty(
  f_name_prefix,
  f_name_suffix_before,
) {
  let v = await functions_rename_if_starts_ends_with(
    f_name_prefix,
    f_name_suffix_before,
    "",
  );
  return v;
}
