import { marker } from "../../../love/public/src/marker.mjs";
import { newline_windows } from "../../../love/public/src/newline_windows.mjs";
import { string_split_multiple } from "../../../love/public/src/string_split_multiple.mjs";
import { newline_windows_escaped } from "../../../love/public/src/newline_windows_escaped.mjs";
export function app_g_openai_split(objections) {
  marker("1");
  let separator = newline_windows_escaped();
  let n = newline_windows();
  let split = string_split_multiple(objections, [separator, n]);
  return split;
}
