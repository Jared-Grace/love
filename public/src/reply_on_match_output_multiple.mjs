import { reply_on_match_output_multiple_lambda } from "../../../love/public/src/reply_on_match_output_multiple_lambda.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export function reply_on_match_output_multiple(fn_a, outputs) {
  arguments_assert(arguments, 2);
  let on_match = reply_on_match_output_multiple_lambda(outputs);
  let fn = reply_on_match(fn_a, [on_match]);
  return fn;
}
