import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { qa_gates_named } from "./qa_gates_named.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
export async function qa_gates_named_results(names) {
  "How a few named gates went, one record each, without any of them stopping the rest.";
  "It exists because asking a handful of gates by name was being done as a loop in a terminal - one dispatcher call per gate, the complaint fished out of a file with a text search, and the whole thing spelled out again every time the set of names changed. A loop of invocations is the shape of a command nobody has written yet, and this is that command.";
  "Nothing is thrown, so a red gate in the middle of the list does not hide the ones after it. The complaint travels beside its own gate's name instead of in a stack trace, which is what lets the answer be read without a pipe - and a pipe is where the exit code was being lost.";
  "Which gates a name can reach is closed by the gate list itself, so a name here can never name anything but a gate, and an unknown one is refused by name rather than quietly dropped.";
  arguments_assert(arguments, 1);
  let wanted = text_split_comma(names);
  let gates = qa_gates_named(wanted);
  let results = await list_map_unordered_async(gates, qa_gate_result);
  return results;
}
