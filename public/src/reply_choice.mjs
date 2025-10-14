import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { list_map } from "./list_map.mjs";
export function reply_choice(choices) {
  let fn = function reply_sequence_matches(possbilities) {
    function lambda(choice) {
      possbilities = choice(possbilities);
    }
    let mapped = list_map(choices, lambda);
    ("maybe only need flatten one level, squash save time");
    let squashed = list_squash(mapped);
    let filtered = reply_matches(squashed);
    return filtered;
  };
  return fn;
}
