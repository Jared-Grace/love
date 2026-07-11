import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { text_combine_3 } from "../../../love/public/src/text_combine_3.mjs";
export function text_combine_space_between(index, item) {
  arguments_assert(arguments, 2);
  let combine = " ";
  let r = text_combine_3(index, combine, item);
  return r;
}
