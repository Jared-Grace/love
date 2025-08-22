import { string_split } from "./string_split.mjs";
export function string_split_comma(f_names) {
  let split = string_split(f_names, ",");
  return split;
}
