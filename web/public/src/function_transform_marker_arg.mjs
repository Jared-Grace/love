import { property_get } from "../../../love/public/src/property_get.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
export function function_transform_marker_arg(v, ast) {
  let stack = property_get(v, "stack");
  let stack_ = list_get_end(stack, 1);
  let stack_2 = list_get_end(stack, 2);
  let a = object_merge_set(
    {
      stack_2,
      stack_,
      ast,
    },
    v,
  );
  return a;
}
