import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
import { qa_gates_machine_names } from "./qa_gates_machine_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_size } from "./list_size.mjs";
import { qa_gate_timings_run_share_least } from "./qa_gate_timings_run_share_least.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
export async function qa_gate_timings_run_short_is(gates) {
  arguments_assert(arguments, 1);
  ("Whether a timing run named so few gates that it must have stopped before it reached the end of them.");
  ("It is asked against the list of gates there are rather than against a number written down. A run inside the frozen copy walks that list and nothing else, so a finished run names all of it and a run that names far fewer stopped early - and the list is the only thing that knows how long it is.");
  ("★ THE NUMBER IT REPLACES WAS A HUNDRED, AND A HUNDRED HAD STOPPED MEANING ANYTHING. It was chosen when the whole list was a few dozen gates, so it caught a run that died in its first minute. Measured 2026-08-26 the list was four hundred and five, and the record in use had been written by a run that reached about position two hundred and thirty-five of two hundred and seventy-nine and then stopped - forty-three gates at the tail, in one unbroken run, never measured. It passed the hundred easily, was written down as a measurement, and dealt the shares from a truncated one for nine days.");
  ("A written-down number cannot survive a list that grows tenfold in a month, and this list did: 43, 165, 177, 273, 361, 421. Any absolute here is a fraction of the list that quietly shrinks every time somebody adds a gate, which is the thing everybody here is encouraged to do.");
  ("★ THE NAMES ARE READ, NOT THE GATES IMPORTED, AND THE DIFFERENCE IS NOT A PREFERENCE. Importing the roster imports every gate in it, so whoever asks how long the list is inherits everything the whole list can reach - and among four hundred gates are ones that reach a function taking a command to run. This is asked from inside a standing grant, and a granted name that reaches a command-running function is a hole nothing downstream can close: no reading of the arguments can rule out one steering that command. Written the importing way it opened exactly that, and the check on standing grants named it the same day.");
  ("Refusing is the right end of a run that died. Nothing is written, the old record stays, and the daemon tries again in an hour - whereas the half-measurement it replaces looked exactly like a whole one, and a wrongly-complete record is believed while a missing one is noticed.");
  let all = await qa_gates_names();
  let machine = await qa_gates_machine_names();
  let walkable = list_difference(all, machine);
  let wanted = list_size(walkable);
  let share = qa_gate_timings_run_share_least();
  let least = multiply(wanted, share);
  let short = less_than(gates, least);
  return short;
}
