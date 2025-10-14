import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
export function reply_choice(choices) {
  let fn = function reply_sequence_matches(possbilities) {
    function lambda(choice) {
      possbilities = choice(possbilities);
    }
    ("maybe only need flatten one level, squash save time");
    let mapped = list_map_squash(choices, lambda);
    let squashed = list_squash(mapped);
    let filtered = reply_matches(squashed);
    return filtered;
  };
  return fn;
}
