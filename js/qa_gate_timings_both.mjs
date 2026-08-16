import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_timings_printed } from "./qa_gate_timings_printed.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { timings_ranked } from "./timings_ranked.mjs";
export async function qa_gate_timings_both(told, here, gates_count) {
  "$plain gates_count";
  "How long every gate of one whole run took, both halves together, slowest first, said beside how many of the repo's gates that actually is";
  "The two halves answer in different ways and neither can be dropped. What this machine was asked comes home as a value, because it was never in a process of its own. What the frozen copy was asked comes home only as the text its shares printed, so it is read back out of that.";
  "How many gates the repo has is said alongside, and that is the whole reason this is safe to hand anybody. Returning the half that happens to be in hand was the obvious version of this and is the wrong one: a few gates' numbers in a shape that reads like all of them is worse than no numbers, because nothing about it looks incomplete. A run read back out of the record has no times for the copy half at all - it was never asked - and that shows here as a count far short of the total rather than as a confident short list.";
  "How many gates the repo has is handed in rather than read here, and that closes a window this used to hold open. Reading it means building the whole list, which means bringing in every gate's file - and one file a neighbour is part way through saving throws while the list is still being made. Asked here, that throw lands after both halves have answered and before the verdict is written down, so a run where every gate was asked and none complained ends with the answer thrown away and a sentence saying no gate ran. Measured 2026-08-16: fourteen minutes lost that way to a file saved in the last seconds of the run.";
  "It is also the truer number for being handed in. Whoever starts the run reads the list once, before anything is frozen, and what comes down here is therefore the count of the gates THIS run went on to ask. Read again at the end it was a count of whatever the folder held by then, which is a different question wearing the same words.";
  arguments_assert(arguments, 3);
  let printed = property_get(told, "printed");
  let copy = qa_gate_timings_printed(printed);
  let machine = property_get(here, "timings");
  let all = [];
  list_add_multiple(all, copy);
  list_add_multiple(all, machine);
  let ranked = timings_ranked(all);
  let r = {
    timed: ranked.length,
    gates: gates_count,
    timings: ranked,
  };
  return r;
}
