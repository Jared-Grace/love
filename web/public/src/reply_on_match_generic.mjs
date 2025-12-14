import { invoke_multiple_args } from "../../../love/public/src/invoke_multiple_args.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { reply_wrap_invoke } from "../../../love/public/src/reply_wrap_invoke.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
export function reply_on_match_generic(fn, before, after, on_args, lambdas) {
  let v = async function reply_on_match_inner(possibilities) {
    list_is_assert(possibilities);
    possibilities = await reply_wrap_invoke(fn, possibilities);
    let b = before(possibilities);
    let filtered = reply_matches(possibilities);
    after(filtered, b);
    let ne = list_empty_not_is(filtered);
    if (ne) {
      let args = [filtered];
      on_args(args);
      function lambda2(lambda) {
        lambda(...args);
      }
      each(lambdas, lambda2);
      invoke_multiple_args(list_fns, args2);
    }
    return filtered;
  };
  return v;
}
