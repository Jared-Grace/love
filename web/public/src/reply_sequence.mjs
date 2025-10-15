import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { reply_wrap_invoke } from "../../../love/public/src/reply_wrap_invoke.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function reply_sequence(sequence_fns) {
  let fn = function reply_sequence_matches(possibilities) {
    list_is_assert(possibilities);
    function lambda(sequence_fn) {
      possibilities = reply_wrap_invoke(sequence_fn, possibilities);
      possibilities = reply_matches(possibilities);
      let e = list_empty_is(possibilities);
      if (e) {
        let v = true;
        return v;
      }
    }
    each(sequence_fns, lambda);
    return possibilities;
  };
  return fn;
}
