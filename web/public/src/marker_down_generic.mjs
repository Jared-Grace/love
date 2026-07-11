import { function_transform_marker_current } from "../../../love/public/src/function_transform_marker_current.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function marker_down_generic(delta_get) {
  let v = await function_transform_marker_current(lambda);
  return v;
  async function lambda(a) {
    let { stack_, stack_1 } = a;
    let index = list_index_of(stack_, stack_1);
    list_remove(stack_, stack_1);
    let index_new = text_combine(
      index,
      delta_get({
        choices: stack_,
        index: index,
      }),
    );
    list_insert(stack_, index_new, stack_1);
  }
}
