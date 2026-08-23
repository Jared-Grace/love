import { arguments_assert } from "./arguments_assert.mjs";
import { functions_oversize_span_skips } from "./functions_oversize_span_skips.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
export async function functions_oversize_refusal_decisions() {
  "How many separate naming choices a person would actually have to make to unblock the cut, as against how many runs it turns down.";
  "A COUNT OF RUNS IS NOT A COUNT OF WORK, AND IT WAS BEING READ AS ONE. The list of runs offers one from every starting line in a body, so a single line ending on a word nobody can name is the last line of every run that reaches it - and the same word is turned down once for each of them. Reported as runs, one word a person could settle in ten seconds arrives looking like a dozen separate problems, and a plan gets made against a number that is mostly the same thing counted again.";
  "THE PAIR OF THE FUNCTION AND THE WORD IS THE CHOICE. The same word in two different functions is two choices, because the run it ends is a different run and the name has to say what that one is for; the same word twice in one function is one choice, already made once it is made.";
  "ONLY THE REASONS ABOUT A NAME ARE COUNTED. The one reason about where a run starts is not a choice anybody makes - the walk goes straight on to the next run in the same function - so folding it in here would count a decision that does not exist.";
  arguments_assert(arguments, 0);
  let walked = await functions_oversize_span_skips();
  let seen = {};
  let blocked = 0;
  for (let row of walked) {
    let f_name = property_get(row, "f_name");
    let skips = property_get(row, "skips");
    for (let offered of skips) {
      let skip = property_get(offered, "skip");
      let taken = null_is(skip);
      if (taken) {
        continue;
      }
      let about = property_get(skip, "about");
      let named = equal(about, "name");
      if (not(named)) {
        continue;
      }
      blocked = add(blocked, 1);
      let address_to = property_get(offered, "address_to");
      let pair = text_combine_multiple([f_name, " ", address_to]);
      let known = property_exists(seen, pair);
      if (not(known)) {
        property_set(seen, pair, 0);
      }
      let runs = property_get(seen, pair);
      property_set(seen, pair, add(runs, 1));
    }
  }
  let pairs = object_property_names(seen);
  let r = {
    decisions: list_size(pairs),
    runs_blocked: blocked,
    rows: seen,
  };
  return r;
}
