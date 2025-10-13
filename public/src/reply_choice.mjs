import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function reply_choice(choices) {
  let fn = function reply_sequence_matches(a) {
    let matches = false;
    function lambda(choice) {
      matches = choice(a);
      log({
        h: "h",
        matches,
        choice,
      });
      if (matches) {
        let v = true;
        return v;
      }
    }
    each(choices, lambda);
    return matches;
  };
  return fn;
}
