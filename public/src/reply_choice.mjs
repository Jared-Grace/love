import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function reply_choice(choices) {
  let fn = function reply_sequence_matches(possbilities) {
    function lambda(choice) {
      possbilities = choice(possbilities);
      let filtered = reply_matches(possbilities);
      return filtered;
    }
    each(choices, lambda);
  };
  return fn;
}
