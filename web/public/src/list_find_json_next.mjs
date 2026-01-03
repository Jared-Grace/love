import { list_next } from "../../../love/public/src/list_next.mjs";
import { list_find_json } from "../../../love/public/src/list_find_json.mjs";
export function list_find_json_next(list, target) {
  let found = list_find_json(list, target);
  list_next(list, found);
}
