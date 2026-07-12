import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function list_map_existing(list, lambda$item, existing) {
  let buttons_responses_result = list_map(list, lambda$item);
  list_add_multiple(existing, buttons_responses_result);
}
