import { reply_on_match_output_generic } from "../../../love/public/src/reply_on_match_output_generic.mjs";
import { reply_on_match_output_add } from "../../../love/public/src/reply_on_match_output_add.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export function reply_on_match_output_multiple(fn_a, item) {
  assert_arguments(arguments, 2);
  let fn_item = reply_on_match_output_add;
  let fn = reply_on_match_output_generic(fn_item, item, fn_a);
  return fn;
}
