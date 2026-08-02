import { qa_gates } from "./qa_gates.mjs";
import { list_duplicates_by_property } from "./list_duplicates_by_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function qa_gates_repeated_gate_run() {
  "Refuses a gate named twice in the whole-repo gate's list, which runs it twice and says nothing about having done so.";
  "It happens the ordinary way work happens here: somebody writes a gate and somebody else notices it is not listed, and the two of them add it seconds apart. Both edits are right, both land, and what is left is a list that is longer than the set of gates it stands for.";
  "Nothing else would ever show it. The list is over a hundred names nobody reads end to end, a repeated gate is green both times it runs, and the only cost - the second run - looks exactly like the whole thing being a little slow.";
  let gates = qa_gates();
  let repeated = list_duplicates_by_property(gates, "name");
  let names = list_map_property(repeated, "name");
  let f_name = fn_name("qa_gates");
  list_empty_is_assert_json(names, {
    names,
    hint: text_combine_multiple([
      "these gates are listed more than once in ",
      f_name,
      " and so are run more than once - take out every mention after the first",
    ]),
  });
  let r = {
    repeated: 0,
  };
  return r;
}
