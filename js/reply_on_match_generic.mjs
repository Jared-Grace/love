import { invoke_multiple_args } from "./invoke_multiple_args.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { reply_matches } from "./reply_matches.mjs";
import { reply_wrap_invoke } from "./reply_wrap_invoke.mjs";
import { list_is_assert } from "./list_is_assert.mjs";
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
      invoke_multiple_args(lambdas, args);
    }
    return filtered;
  };
  return v;
}
