import { arguments_assert } from "./arguments_assert.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
export async function qa_gates_ordered_ms(gates) {
  arguments_assert(arguments, 1);
  ("How long a set of gates takes when each one is finished before the next is started.");
  ("It is the twin of the all-at-once one and exists only to be put beside it. On its own the number says nothing, because a wait means nothing without a second wait measured on the same machine in the same minute - which is the whole reason the two are separate names asked one after the other rather than one number written down on a quiet afternoon and compared against a busy one later.");
  ("This is also the only way to get an honest cost for a single gate. Started alongside fifty others on one thread, a gate's clock runs from when the crowd started to when its own turn ended, so what gets written down is the order they finished in and not what any of them cost.");
  let started = date_now_milliseconds();
  await list_map_async(gates, qa_gate_result);
  let taken = date_milliseconds_since(started);
  return taken;
}
