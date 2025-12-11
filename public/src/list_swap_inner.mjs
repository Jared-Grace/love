import { list_replace } from "../../../love/public/src/list_replace.mjs";
export function list_swap_inner(list, ai, b, bi, a) {
  list_replace(list, ai, b);
  list_replace(list, bi, a);
}
