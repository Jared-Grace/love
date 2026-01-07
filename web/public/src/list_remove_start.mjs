import { list_splice } from "../../../love/public/src/list_splice.mjs";
export function list_remove_start(s) {
  list_splice(list, 0, s);
}
