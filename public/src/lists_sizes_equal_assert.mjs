import { function_copy_replace_first } from "../../../love/public/src/function_copy_replace_first.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function lists_sizes_equal_assert(lists) {
  let function_copy_replace_first = list_first(lists);
  let fs = list_size(function_copy_replace_first);
  function lambda3(list) {
    let size = list_size(list);
    let v = size === fs;
    return v;
  }
  let a = list_all(lists, lambda3);
  assert(a);
}
