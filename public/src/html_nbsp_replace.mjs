import { string_replace } from "../../../love/public/src/string_replace.mjs";
export function html_nbsp_replace(s, from, to) {
  let replaced = string_replace(s, from, to);
  return replaced;
}
