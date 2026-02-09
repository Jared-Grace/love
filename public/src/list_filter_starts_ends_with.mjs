import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
export function list_filter_starts_ends_with(list, prefix, suffix) {
  let filtered3 = list_filter_starts_with(list, prefix);
  let filtered = list_filter_ends_with(filtered3, suffix);
  return filtered;
}
