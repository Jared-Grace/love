import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function reply_on_match_output_generic(fn_item, item, fn_a) {
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
