import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
export function permission_replay_events_function_keys(keyed) {
  "The keys among these keyed calls that are the name of a dispatcher function rather than the shape of a command line.";
  "Which of the two a key is was already decided where the key was chosen, and the deciding is not repeatable afterwards: the grouping keeps one arbitrary sample command out of everything that shared a key, and a shape whose sample happens to be piped would be read as ungrantable while the same shape run plainly would not. So the answer is carried out of the keying rather than guessed at again.";
  let names = new Set();
  for (let event of keyed) {
    let named = property_equals(event, "kind", "function");
    if (named) {
      let key = property_get(event, "replay_key");
      names.add(key);
    }
  }
  return names;
}
