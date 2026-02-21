import { list_min } from "../../../love/public/src/list_min.mjs";
import { integer_is } from "../../../love/public/src/integer_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_min_try(mapped) {
  let filtered = list_filter(mapped, integer_is);
  let left = list_min(filtered);
  return left;
}
