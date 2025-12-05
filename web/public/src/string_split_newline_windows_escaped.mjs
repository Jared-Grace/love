import { string_split } from "../../../love/public/src/string_split.mjs";
import { newline_windows_escaped } from "../../../love/public/src/newline_windows_escaped.mjs";
export function string_split_newline_windows_escaped(objections) {
  let separator = newline_windows_escaped();
  let split = string_split(objections, separator);
  return split;
}
