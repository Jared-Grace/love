import { list_remove_at_multiple } from "../../../love/public/src/list_remove_at_multiple.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
export function list_remove_at_multiple_reverse(list) {
  let removals = list_copy_reverse(list);
  list_remove_at_multiple(list, removals);
}
