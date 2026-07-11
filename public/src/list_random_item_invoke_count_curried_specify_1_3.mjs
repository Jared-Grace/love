import { list_random_item_invoke_count } from "../../../love/public/src/list_random_item_invoke_count.mjs";
export function list_random_item_invoke_count_curried_specify_1_3(
  choices,
  count,
) {
  let r2 = function list_random_item_invoke_count_curried_specify_1_3_result(
    la,
  ) {
    let r = list_random_item_invoke_count(choices, la, count);
    return r;
  };
  return r2;
}
