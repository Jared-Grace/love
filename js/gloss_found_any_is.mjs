import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
export function gloss_found_any_is(answer) {
  "$plain answer";
  "Whether a gloss reading met anything at all in the thing it was looking at, so that the ones that met nothing can be dropped by name.";
  "Every sweep of a gloss store answers for everything it read, the clean and the offending alike, and every reader above one of those sweeps then keeps only the part that found something. Two of them declared the same one-line question in their own middles under the same local name.";
  ("It is the keep-or-drop twin of ",
    fn_name("gloss_chapter_found_count"),
    ", which reads the same word for its size rather than for whether it holds anything. The two go together: one narrows a sweep to its offenders, the other adds up how much they found.");
  ("Answering for everything and narrowing afterwards is the point of the shape, not waste. A sweep that only handed back what it found could not tell a clean store from a store it never reached, and that difference is what the gates above these readings turn on.");
  arguments_assert(arguments, 1);
  let any = property_list_empty_not_is(answer, "found");
  return any;
}
