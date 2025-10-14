import { log } from "../../../love/public/src/log.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
export function reply_choice(choices) {
  let fn = function reply_choice_matches(possibilities) {
    list_is_assert(possibilities);
    function lambda(choice) {
      let v = choice(possibilities);
      return v;
    }
    ("maybe only need flatten one level, squash save time");
    let squashed = list_map_squash(choices, lambda);
    let filtered = reply_matches(squashed);
    log(filtered);
    return filtered;
  };
  return fn;
}
