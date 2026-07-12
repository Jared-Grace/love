import { arguments_assert } from "./arguments_assert.mjs";
import { list_reduce } from "./list_reduce.mjs";
import { text_combine } from "./text_combine.mjs";
export function text_combine_multiple(list) {
  arguments_assert(arguments, 1);
  let combined = list_reduce(list, text_combine, "");
  return combined;
}
