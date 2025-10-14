import { log_json } from "../../../love/public/src/log_json.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { match_wrap_invoke } from "../../../love/public/src/match_wrap_invoke.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function reply_sequence(sequence_fns) {
  let fn = function reply_sequence_matches(possibilities) {
    list_is_assert(possibilities);
    function lambda(sequence_fn) {
      possibilities = match_wrap_invoke(sequence_fn, possibilities);
      log_json({
        possibilities,
      });
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
