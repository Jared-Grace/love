import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
export function string_includes_or_starts_with(s, item) {
  let i = string_includes(s, item);
  let sw = string_starts_with(s, item);
  let v = sw || i;
  return v;
}
