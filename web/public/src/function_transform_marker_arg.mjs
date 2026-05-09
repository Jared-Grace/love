import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
export function function_transform_marker_arg(v, ast) {
  let { stack } = v;
  let stack1 = list_get_end(stack, 1);
  let stack2 = list_get_end(stack, 2);
  let a = object_merge_set(
    {
      stack2,
      stack1,
      ast,
    },
    v,
  );
  return a;
}
