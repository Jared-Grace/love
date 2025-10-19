import { reply_on_match_output_multiple_lambda } from "../../../love/public/src/reply_on_match_output_multiple_lambda.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export function reply_on_match_output_multiple(fn_a, items) {
  marker("1");
  assert_arguments(arguments, 2);
  let on_match = reply_on_match_output_multiple_lambda(items);
  let fn = reply_on_match(fn_a, [on_match]);
  return fn;
}
