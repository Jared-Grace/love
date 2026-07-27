import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { qa_gates_tree } from "./qa_gates_tree.mjs";
import { qa_gates_shard } from "./qa_gates_shard.mjs";
import { qa_gates_run } from "./qa_gates_run.mjs";
export async function qa_gate_tree_shard_run(index_given, count_given) {
  "Asks one share of the gates that the files alone can answer";
  "The share is named by two numbers and never by a list of gate names. A list of names would turn this into a way of asking for any function at all by name from a command line, which is the one thing the runner that spawns it takes care not to be; a number can only ever pick out of the list already written here, whatever is passed";
  "The numbers arrive as text when this is asked for from a command line and as numbers when it is asked for from code, and reading them as text handles both";
  let index = integer_from_base_try(index_given, 10);
  let count = integer_from_base_try(count_given, 10);
  let gates = qa_gates_tree();
  let mine = qa_gates_shard(gates, index, count);
  let r = await qa_gates_run(mine);
  return r;
}
