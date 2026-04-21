import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_add(list, lambda$item, existing) {
  let buttons_responses_result = list_map(list, lambda$item);
  list_add(existing, buttons_responses_result);
}
