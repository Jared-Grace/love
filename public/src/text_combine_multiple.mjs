import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function text_combine_multiple(list) {
  arguments_assert(arguments, 1);
  let combined = list_reduce(list, text_combine, "");
  return combined;
}
