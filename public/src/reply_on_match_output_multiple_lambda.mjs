import { each } from "../../../love/public/src/each.mjs";
import { reply_on_match_output_add_multiple } from "../../../love/public/src/reply_on_match_output_add_multiple.mjs";
export function reply_on_match_output_multiple_lambda(items) {
  let v = function lambda(possibilities) {
    function lambda2(possibility) {
      reply_on_match_output_add_multiple(possibility, items);
    }
    each(possibilities, lambda2);
    return possibilities;
  };
  return v;
}
