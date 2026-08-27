import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { examples_registers_unexampled } from "./examples_registers_unexampled.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function examples_registers_gate_run() {
  "QA gate: every address and every verb an example may name is named by an example.";
  "The corpus is the only thing that runs these, so the two lists are the whole boundary of what is checked. A name added to one of them and then not shown in an example reads afterwards exactly like a checked unit - it sits among its neighbours on a list titled by what examples may use, and nothing anywhere fails.";
  "It is the same silence the other example gates were built against, one level up: those ask whether every example is placed and described, this asks whether everything the corpus is allowed to reach is actually reached.";
  let unexampled = await examples_registers_unexampled();
  let f_name = fn_name("example_new_from_temp");
  list_empty_is_assert_json(unexampled, {
    hint: text_combine_multiple([
      "these are listed as addresses or verbs an example may name but no example names them, so nothing checks them - draft each missing example under scripts/temp and promote it with ",
      f_name,
      ", or take the ones that cannot be shown back off the list",
    ]),
  });
  let r = {
    unexampled,
  };
  return r;
}
