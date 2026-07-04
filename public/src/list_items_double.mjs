import { list_items_multiply } from "../../../love/public/src/list_items_multiply.mjs";
export function list_items_double(counts) {
  let count = 2;
  let doubled = list_items_multiply(counts, count);
  return doubled;
}
