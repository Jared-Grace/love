import { text_includes_curried_right } from "../../../love/public/src/text_includes_curried_right.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_includes(mapped, part) {
  let lambda = text_includes_curried_right(part);
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
