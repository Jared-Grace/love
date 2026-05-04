import { text_starts_with_https_prefix } from "../../../love/public/src/text_starts_with_https_prefix.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_starts_with_https_prefix(filtered) {
  let filtered3 = list_filter(filtered, text_starts_with_https_prefix);
  return filtered3;
}
