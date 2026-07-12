import { object_merge_set } from "./object_merge_set.mjs";
import { list_reduce } from "./list_reduce.mjs";
export function objects_merge(result) {
  let value = list_reduce(result, object_merge_set, {});
  return value;
}
