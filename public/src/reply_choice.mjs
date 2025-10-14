import { each } from "../../../love/public/src/each.mjs";
export function reply_choice(choices) {
  let fn = function reply_sequence_matches(a) {
    let matches_result = false;
    function lambda(choice) {
      let { matches } = choice(a);
      if (matches) {
        let v = true;
        matches_result = v;
        return v;
      }
    }
    each(choices, lambda);
    let v2 = {
      matches: matches_result,
    };
    return v2;
  };
  return fn;
}
