import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function reply_choice(choices) {
  let fn = function reply_sequence_matches(a) {
    let matches = false;
    function lambda(choice) {
      matches = choice(a);
      if (matches) {
        let v = true;
        return v;
      }
    }
    each(choices, lambda);
    log({
      matches,
    });
    return matches;
  };
  return fn;
}
