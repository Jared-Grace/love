import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_add(list, lambda9, buttons_responses) {
  let buttons_responses_result = list_map(list, lambda9);
  list_add(buttons_responses, buttons_responses_result);
}
