import { reply_wrap_invoke } from "../../../love/public/src/reply_wrap_invoke.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { noop } from "./noop.mjs";
export function reply_on_match(fn, lambda) {
  let before = noop;
  let after = noop;
  let on_args = noop;
  let matcher = async function reply_on_match_inner(possibilities) {
    list_is_assert(possibilities);
    possibilities = await reply_wrap_invoke(fn, possibilities);
    before(possibilities);
    let filtered = reply_matches(possibilities);
    after(filtered);
    let ne = list_empty_not_is(filtered);
    if (ne) {
      let args = [filtered];
      on_args(args);
      lambda(...args);
    }
    return filtered;
  };
  return matcher;
}
