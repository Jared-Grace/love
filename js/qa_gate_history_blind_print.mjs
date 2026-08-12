import { qa_gate_said_history_blind_is } from "./qa_gate_said_history_blind_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function qa_gate_history_blind_print(name, said) {
  "$plain name";
  "$plain said";
  arguments_assert(arguments, 2);
  ("Says so, and says what to do about it, when a gate went red in the frozen copy only because the copy has no history.");
  ("This is the one red that no second asking can teach you anything about. Asked again in the folder as it stands it goes quiet, which reads as a tear in the copy or as somebody having fixed it since - and it is neither. It will be red again on the next run and on every run after that, and a run with nothing else wrong still ends red and still spends its last phase asking the reds over again. One sat there from the eleventh of August until the day after, costing a phase of every run in between, and what it cost was never a wrong answer about the code.");
  ("The fix is to add the name to the list of questions asked of this machine, and it is the whole fix - the gate itself is sound and is asking a fair question in the wrong room. Nothing is taken out of the whole roster, because the copy is asked whatever that shorter list leaves over. So the names are printed rather than described, since whoever reads this wants to know where to write one, not what went wrong.");
  let blind = qa_gate_said_history_blind_is(said);
  if (blind) {
    console.log(
      "\nWRONG HALF  " +
        name +
        ": it asks the history, and the frozen copy is made without any. It cannot be green in there on any commit, and asking it again in the living folder will only show it quiet. Add its name to " +
        fn_name("qa_gates_machine") +
        ", which is the half asked out here; the copy is asked whatever that list leaves over, so adding it there is the whole fix and it keeps its place in " +
        fn_name("qa_gates") +
        ". " +
        fn_name("qa_gates_tree_git_reaching") +
        " names the other gates standing where the same thing could reach them.",
    );
  }
  return blind;
}
