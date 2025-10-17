import { reply_on_match_output_add_multiple } from "../../../love/public/src/reply_on_match_output_add_multiple.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_on_match_output_generic } from "../../../love/public/src/reply_on_match_output_generic.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export function reply_on_match_output_multiple(fn_a, item) {
  marker("1");
  assert_arguments(arguments, 2);
  let fn_item = reply_on_match_output_add_multiple;
  let fn = reply_on_match_output_generic(fn_item, item, fn_a);
  return fn;
}
