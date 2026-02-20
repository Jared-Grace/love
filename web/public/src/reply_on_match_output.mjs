import { reply_on_match_output_multiple } from "../../../love/public/src/reply_on_match_output_multiple.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export function reply_on_match_output(fn_a, item) {
  arguments_assert(arguments, 2);
  let fn = reply_on_match_output_multiple(fn_a, [item]);
  return fn;
}
