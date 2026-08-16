import { qa_gate_red_again_print } from "./qa_gate_red_again_print.mjs";
import { qa_gate_quiet_is } from "./qa_gate_quiet_is.mjs";
import { or } from "./or.mjs";
import { qa_gate_failed_said } from "./qa_gate_failed_said.mjs";
import { not } from "./not.mjs";
import { qa_gate_failed_joined } from "./qa_gate_failed_joined.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { qa_gate_parts_print } from "./qa_gate_parts_print.mjs";
export function qa_gate_failed_assert(told, here, asked_ms, blamed_ms) {
  arguments_assert(arguments, 4);
  ("Throws when anything went red, naming every gate that did, and returns quietly when nothing did.");
  ("The two halves are joined first. What the frozen copy complained about and what this machine complained about are one list here, so one thrown sentence covers both and neither half can go red without being said.");
  ("How long the parts took is printed on the way out as well as on the way through, because a run that throws is the run whose timings somebody actually wants.");
  ("Every red used to be asked once more out in the living folder before throwing. That was there for one fault - the copier catching a file half written while several of us were writing to it - and the run no longer copies the living folder, so the fault cannot happen and the second ask had nothing left to tell apart. It also had to be told which commit was frozen, purely to know whether to bother, and that is why nothing here is told about a commit any more.");
  ("A half that says it went red is red even when it names nobody, and that case is the one worth spelling out. Each name on the list was read back out of what a share printed, so a share that died before it could print - out of memory, or on a file it could not load - leaves the list empty while still coming back unhappy. Asking only how long the list is then reads that share's whole set of gates as answered and quiet, when not one of them was ever asked. Measured 2026-08-16: a run said every gate passed and filed itself against the commit as green false with nothing named, and a gate that complains on its own when asked by hand was inside it.");
  let failed = qa_gate_failed_joined(told, here);
  let quiet = qa_gate_quiet_is(told, here);
  let named_any = greater_than(failed.length, 0);
  let unhappy = not(quiet);
  let red = or(named_any, unhappy);
  if (red) {
    qa_gate_parts_print(asked_ms, blamed_ms);
    ("How to ask the same gates again is said here rather than left to be found, because this is the moment the reader wants it and the command that answers it takes no arguments - so the one thing they must not have to do is type the names back in.");
    qa_gate_red_again_print(failed);
    let said = qa_gate_failed_said(failed);
    throw new Error("qa gate: " + said + " failed");
  }
}
