import { list_remove_end } from "../../../love/public/src/list_remove_end.mjs";
export function list_remove_last(coordinates) {
  let removed = list_remove_end(coordinates, 1);
  return removed;
}
