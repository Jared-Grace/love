import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timing_prefix } from "./qa_gate_timing_prefix.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { text_split_last } from "./text_split_last.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export function qa_gate_timings_printed(output) {
  "How long each gate took, read back out of what a run printed";
  "This is the only way the numbers come home from a share asked in a process of its own. A share that went green hands back a result carrying them, but a share that went red throws before it reaches one, and the red run is the run whose timings somebody actually wants.";
  "A line that says a name and no number it can read is left out rather than guessed at. A gate carried here with nothing for its time would be counted as measured and answer nought, which reads exactly like a gate that cost nothing.";
  arguments_assert(arguments, 1);
  let prefix = qa_gate_timing_prefix();
  let lines = text_split_newline(output);
  let taken = [];
  for (let line of lines) {
    if (text_includes_not(line, prefix)) {
      continue;
    }
    let after = text_split_last(line, prefix);
    let halves = text_split_colon(after);
    let name = list_first(halves);
    let said = list_last(halves);
    let milliseconds = integer_from_base_try(said, 10);
    let unreadable = null_is(milliseconds);
    if (unreadable) {
      continue;
    }
    list_add(taken, {
      name,
      milliseconds,
    });
  }
  return taken;
}
