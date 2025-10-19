import { marker } from "../../../love/public/src/marker.mjs";
import { reply_on_match_output_multiple } from "../../../love/public/src/reply_on_match_output_multiple.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export function reply_on_match_output(fn_a, item) {
  marker("1");
  assert_arguments(arguments, 2);
  let fn = reply_on_match_output_multiple(fn_a, [item]);
  return fn;
}
