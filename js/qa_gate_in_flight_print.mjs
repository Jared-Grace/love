import { list_unique } from "./list_unique.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export function qa_gate_in_flight_print(flying, lately) {
  "The one line a reader wants under a red run: whether anything complained about is somebody's live work.";
  "Said once at the end rather than gate by gate, because the question is about the run and not about any one gate - and it is the line that decides whether to stop and look or to carry on.";
  "Live work is told in two degrees, and both are said, because they are different strengths of the same answer. A file with a change nobody has committed is certain. A file committed within the hour is likely, and it is the one that used to be missed: this repo commits one small idea at a time, so a peer mid-topic has a clean file nearly always.";
  "Only when neither is found does the run say so outright, and that sentence is now a much rarer and much stronger thing than the one it replaced - which said the same words whenever no file happened to be dirty at the instant it looked, and so said them over a board full of other people's afternoons.";
  let editing = list_unique(flying);
  let list = list_unique(lately);
  let just = list_difference(list, editing);
  let any_editing = list_empty_not_is(editing);
  if (any_editing) {
    let joined = list_join_comma(editing);
    console.log("\nIN FLIGHT AND RED  " + joined);
  }
  let any_just = list_empty_not_is(just);
  if (any_just) {
    let joined = list_join_comma(just);
    console.log(
      "\nCOMMITTED WITHIN THE HOUR AND RED  somebody is probably mid-topic in these, so they are likely theirs rather than yours  " +
        joined,
    );
  }
  let neither = list_empty_is(editing);
  let nothing_just = list_empty_is(just);
  if (neither && nothing_just) {
    console.log(
      "\nNOBODY IS WORKING ON ANY OF THIS  nothing complained about is being edited, and nothing was committed within the hour, so all of it is standing debt",
    );
  }
}
