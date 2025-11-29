import { list_remove_at_multiple } from "../../../love/public/src/list_remove_at_multiple.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
export function list_remove_at_multiple_reverse(m) {
  let c = list_copy_reverse(m);
  list_remove_at_multiple(c);
}
