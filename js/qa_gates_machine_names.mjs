import { fn_name } from "./fn_name.mjs";
import { qa_gates_names_generic } from "./qa_gates_names_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function qa_gates_machine_names() {
  arguments_assert(arguments, 0);
  ("The gates asked of this machine rather than of a frozen copy, named rather than imported.");
  ("The twin without the middle word answers for the whole roster; this one answers for the half of it whose questions no copy of the files could answer - the background services, the real hook, the notes kept elsewhere on this machine, and the history.");
  let f_name = fn_name("qa_gates_machine");
  let names = await qa_gates_names_generic(f_name);
  return names;
}
