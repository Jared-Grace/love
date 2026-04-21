import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function list_map_add(list, lambda$item, existing) {
  let buttons_responses_result = list_map(list, lambda$item);
  list_add_multiple(existing, buttons_responses_result);
}
