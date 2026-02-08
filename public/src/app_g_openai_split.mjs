import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { newline_windows } from "../../../love/public/src/newline_windows.mjs";
import { text_split_multiple } from "../../../love/public/src/text_split_multiple.mjs";
import { newline_windows_escaped } from "../../../love/public/src/newline_windows_escaped.mjs";
export function app_g_openai_split(objections) {
  let separator = newline_windows_escaped();
  let n = newline_windows();
  let split = text_split_multiple(objections, [separator, n]);
  let mapped = list_map(split, text_trim);
  let filtered = list_filter_empty_not_is(mapped);
  return filtered;
}
