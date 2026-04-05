import { list_take_end_count_generic } from "../../../karate_code/public/src/list_take_end_count_generic.mjs";
import { list_take } from "./list_take.mjs";
export function list_take_end_count(list, count) {
  let c = list_take_end_count_generic(list, count);
  let result = list_take(list, c);
  return result;
}
