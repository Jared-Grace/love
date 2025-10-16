import { list_map } from "../../../love/public/src/list_map.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
import { reply_wrap_invoke } from "../../../love/public/src/reply_wrap_invoke.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
export function reply_on_match(fn, on_match) {
  let matcher = async function reply_on_match_inner(possibilities) {
    list_is_assert(possibilities);
    let u = await uuid();
    let mapped = list_map(list, function lambda(item) {});
    possibilities = await reply_wrap_invoke(fn, possibilities);
    let filtered = reply_matches(possibilities);
    let ne = list_empty_not_is(filtered);
    if (ne) {
      on_match(filtered);
    }
    return filtered;
  };
  return matcher;
}
