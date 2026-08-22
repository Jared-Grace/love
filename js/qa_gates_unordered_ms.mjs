import { arguments_assert } from "./arguments_assert.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
export async function qa_gates_unordered_ms(gates) {
  arguments_assert(arguments, 1);
  ("How long a set of gates takes when every one of them is started at once, which is the way the whole-repo run asks them.");
  ("What comes back is the wait rather than what any of them said. Whether a gate went red is a question about the code and is asked everywhere else; this is a question about the machine, and answering both at once would make a record that goes stale for two unrelated reasons.");
  ("Nothing here catches anything, because the one gate runner it calls already reports a red gate instead of throwing. So a set that is entirely red is timed exactly as a set that is entirely green, which is the only way this is usable on a repo that is red - and a repo is red at precisely the times somebody wants to know why the run is slow.");
  let started = date_now_milliseconds();
  await list_map_unordered_async(gates, qa_gate_result);
  let taken = date_milliseconds_since(started);
  return taken;
}
