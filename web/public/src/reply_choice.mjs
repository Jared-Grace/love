import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { list_map } from "./list_map.mjs";
export function reply_choice(choices) {
  let fn = function reply_sequence_matches(possbilities) {
    function lambda(choice) {
      possbilities = choice(possbilities);
      let filtered = reply_matches(possbilities);
      return filtered;
    }
    let mapped = list_map(choices, lambda);
  };
  return fn;
}
