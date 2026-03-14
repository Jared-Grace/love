import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
export function objects_merge(result) {
  let value = list_reduce(result, object_merge, {});
  return value;
}
