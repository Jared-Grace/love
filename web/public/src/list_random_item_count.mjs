import { list_random_item_invoke_count_curried_specify_1_3 } from "../../../love/public/src/list_random_item_invoke_count_curried_specify_1_3.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_random_item_count(choices, count) {
  let lambda_la = list_random_item_invoke_count_curried_specify_1_3(
    choices,
    count,
  );
  let items = list_adder(lambda_la);
  return items;
}
