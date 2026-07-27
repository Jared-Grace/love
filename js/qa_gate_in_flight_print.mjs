import { list_unique } from "./list_unique.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export function qa_gate_in_flight_print(flying) {
  "The one line a reader wants under a red run: whether anything complained about is being edited right now";
  "Said once at the end rather than gate by gate, because the question is about the run and not about any one gate - and it is the line that decides whether to stop and look or to carry on";
  "A run where nothing is in flight is the ordinary case here and is worth saying out loud. Several of us edit this one folder, so a red gate is usually somebody's standing debt rather than anything that just broke, and without this line every one of us pays the same few minutes proving that again";
  let named = list_unique(flying);
  let none = list_empty_is(named);
  if (none) {
    console.log(
      "\nNOTHING IN FLIGHT IS RED  every complaint above is about work already committed, so none of it is a half-finished edit",
    );
    return;
  }
  let joined = list_join_comma(named);
  console.log("\nIN FLIGHT AND RED  " + joined);
}
