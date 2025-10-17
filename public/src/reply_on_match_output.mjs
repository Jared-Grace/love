import { reply_on_match_output_add } from "../../../love/public/src/reply_on_match_output_add.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
export function reply_on_match_output(fn_a, item) {
  assert_arguments(arguments, 2);
  let fn_item = reply_on_match_output_add;
  function lambda(possibilities) {
    function lambda2(possibility) {
      fn_item(possibility, item);
    }
    each(possibilities, lambda2);
    return possibilities;
  }
  let fn = reply_on_match(fn_a, lambda);
  return fn;
}
