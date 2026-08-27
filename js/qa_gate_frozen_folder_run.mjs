import { arguments_assert } from "./arguments_assert.mjs";
import { node_run_lines_whole } from "./node_run_lines_whole.mjs";
export async function qa_gate_frozen_folder_run(folder, gate_name) {
  "$plain folder";
  "$plain gate_name";
  "Runs ONE gate by name inside a frozen copy that has already been put somewhere, and hands back what it said.";
  "THE COPY IS HANDED IN RATHER THAN MADE HERE, which is the whole reason this is separate from its neighbour. Putting the copy reads the commit the folder is at afresh, so a set of gates that each put their own copy is a set of gates asked of several different commits - and with ten of us committing into one folder that is not a corner case, it is what happens. Asked of one copy the answers are about one state of the code and can be reported as one.";
  "The run is asked for as a list of words rather than as a line of text, so nothing carried in the name can turn into a second word, and the program it runs is spelled here rather than taken from the caller.";
  "Nothing is caught. A gate that complains complains, because a complaint is the answer this was asked for.";
  arguments_assert(arguments, 2);
  let words = ["scripts/ai.mjs", gate_name];
  let said = await node_run_lines_whole(folder, words);
  return said;
}
