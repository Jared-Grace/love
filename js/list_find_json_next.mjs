import { list_next } from "./list_next.mjs";
import { list_find_json } from "./list_find_json.mjs";
export function list_find_json_next(list, target) {
  let found = list_find_json(list, target);
  let next = list_next(list, found);
  return next;
}
