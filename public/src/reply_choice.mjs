import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { match_wrap_invoke } from "../../../love/public/src/match_wrap_invoke.mjs";
import { log_json } from "../../../love/public/src/log_json.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
export function reply_choice(choices) {
  let fn = function reply_choice_matches(possibilities) {
    list_is_assert(possibilities);
    function lambda(choice) {
      let copy = json_copy(possibilities);
      copy = match_wrap_invoke(choice, copy);
      return copy;
    }
    ("maybe only need flatten one level, squash save time");
    let squashed = list_map_squash(choices, lambda);
    log_json({
      squashed,
    });
    let filtered = reply_matches(squashed);
    return filtered;
  };
  return fn;
}
