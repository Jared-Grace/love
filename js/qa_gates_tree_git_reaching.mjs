import { fn_name } from "./fn_name.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
import { qa_gates_machine_names } from "./qa_gates_machine_names.mjs";
import { function_seams_reached_memo } from "./function_seams_reached_memo.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function qa_gates_tree_git_reaching() {
  arguments_assert(arguments, 0);
  ("The gates asked of the frozen copy that can reach the function which runs git, and so can never be green in there.");
  ("The copy is made without the history on purpose, so a gate that asks the history finds no repository at all and fails with a message about the folder rather than about the code. That is not a transient and no second asking will change it: it is red every run, on every commit, for as long as it sits in that half. One did, from 2026-08-11 until the day after, and the cost of it was not a wrong answer - it was that a run with nothing else wrong still ended red and still spent its last phase asking every red gate over again.");
  ("A gate like this is not broken and needs no repair. It is in the wrong half: its question is about this machine and this folder, which is what the other list is for, and moving the name is the whole fix.");
  ("The lists are read by name rather than imported, and that is what makes this askable at all. Importing a roster of gates imports every gate in it, so this would inherit everything every gate can reach and would name itself first.");
  ("One walk is shared across all of them. Every gate in the repo sits on the same handful of small functions underneath, so asking a hundred and seventy roots separately reads those same files a hundred and seventy times.");
  let all = await qa_gates_names();
  let machine = await qa_gates_machine_names();
  function tree_is(name) {
    let elsewhere = list_includes_not(machine, name);
    return elsewhere;
  }
  let tree = list_filter(all, tree_is);
  let runner = fn_name("git_folder_run");
  let seams = [runner];
  let remembered = {};
  let reaching = [];
  for (let name of tree) {
    let reached = await function_seams_reached_memo(name, seams, remembered);
    let any = list_empty_not_is(reached);
    if (any) {
      list_add(reaching, name);
    }
  }
  return reaching;
}
