import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { reply_on_match_output_add_multiple } from "../../../love/public/src/reply_on_match_output_add_multiple.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export function reply_on_match_output_multiple(fn_a, items) {
  marker("1");
  assert_arguments(arguments, 2);
  function on_match(possibilities) {
    function lambda2(possibility) {
      reply_on_match_output_add_multiple(possibility, items);
    }
    each(possibilities, lambda2);
    return possibilities;
  }
  let fn = reply_on_match(fn_a, [on_match]);
  return fn;
}
