import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_map } from "./list_map.mjs";
import { newline_windows } from "./newline_windows.mjs";
import { text_split_multiple } from "./text_split_multiple.mjs";
import { newline_windows_escaped } from "./newline_windows_escaped.mjs";
export function app_g_openai_split(objections) {
  let separator = newline_windows_escaped();
  let n = newline_windows();
  let split = text_split_multiple(objections, [separator, n]);
  let mapped = list_map(split, text_trim);
  let filtered = list_filter_text_empty_not_is(mapped);
  return filtered;
}
