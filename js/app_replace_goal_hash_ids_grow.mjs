import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
export function app_replace_goal_hash_ids_grow(tokens, lengths, group) {
  "One step apart for goals whose words came out alike: at every place where their symbols differ, each of them shows one more letter of its symbol there. Says whether anything grew.";
  let grew = false;
  function count_get(index) {
    let r = tokens[index].length;
    return r;
  }
  let places = Math.max(...group.map(count_get));
  for (let place = 0; less_than(place, places); place++) {
    function token_at_get(index) {
      let r2 = tokens[index][place] ?? "";
      return r2;
    }
    let texts = group.map(token_at_get);
    if (less_than(new Set(texts).size, 2)) {
      continue;
    }
    for (let index of group) {
      let token = tokens[index][place];
      if (
        not_equal(token, undefined) &&
        less_than(lengths[index][place], token.length)
      ) {
        lengths[index][place] += 1;
        grew = true;
      }
    }
  }
  return grew;
}
