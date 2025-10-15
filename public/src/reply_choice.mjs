import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { reply_wrap_invoke } from "../../../love/public/src/reply_wrap_invoke.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
export function reply_choice(choices) {
  lia;
  let fn = function reply_choice_matches(possibilities) {
    list_is_assert(possibilities);
    function lambda(choice) {
      let copy = json_copy(possibilities);
      copy = reply_wrap_invoke(choice, copy);
      return copy;
    }
    ("maybe only need flatten one level, squash save time");
    let squashed = list_map_squash(choices, lambda);
    let filtered = reply_matches(squashed);
    return filtered;
  };
  return fn;
}
