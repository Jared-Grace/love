import { string_only_or } from "../../../love/public/src/string_only_or.mjs";
export function string_only_or_space(s, symbols_split_non) {
  let replaced = string_only_or(s, symbols_split_non, " ");
  return replaced;
}
