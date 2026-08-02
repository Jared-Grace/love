import { equal } from "./equal.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
export function each(list, lambda$item) {
  "the hint is a lone literal, and the name a field of its own, because every text-joining helper in the repo reduces THROUGH this loop - building the message out of pieces here would call back into the very function that is building it, and the stack would run out before the mistake could be reported";
  list_is_assert_json(list, {
    fn: each.name,
    hint: "this expects a list to walk. a text is walkable too, one LETTER at a time, so handing it one where a list was meant runs the body against every character and never says a word - the trap a comma-joined argument off a command line falls into. split it into a list first",
  });
  for (let item of list) {
    let result = lambda$item(item);
    if (equal(result, true)) {
      return;
    }
  }
}
