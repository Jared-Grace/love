import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
export function list_filter_starts_ends_with(
  f_names,
  f_name_prefix,
  f_name_suffix_before,
) {
  let filtered2 = list_filter_starts_with(f_names, f_name_suffix_before);
  let filtered = list_filter_ends_with(filtered2, f_name_suffix_after);
  return filtered;
}
