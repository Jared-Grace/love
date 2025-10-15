import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { reply_wrap_invoke } from "../../../love/public/src/reply_wrap_invoke.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
export function reply_choice(choices) {
  list_is_assert(choices);
  let fn = function reply_choice_matches(possibilities) {
    list_is_assert(possibilities);
    async function lambda(choice) {
      let copy = json_copy(possibilities);
      copy = await reply_wrap_invoke(choice, copy);
      return copy;
    }
    ("maybe only need flatten one level, squash save time");
    let mapped = list_map(choices, lambda);
    let squashed = list_squash(mapped);
    let filtered = reply_matches(squashed);
    return filtered;
  };
  return fn;
}
