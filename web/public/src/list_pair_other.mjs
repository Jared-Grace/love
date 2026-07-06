import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export function list_pair_other(choices, answer_property) {
  list_remove(choices, answer_property);
  let question_property = list_single(choices);
  return question_property;
}
