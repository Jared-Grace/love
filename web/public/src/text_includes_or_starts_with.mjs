import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
export function text_includes_or_starts_with(s, item) {
  let i = text_includes(s, item);
  let sw = string_starts_with(s, item);
  let v = sw || i;
  return v;
}
