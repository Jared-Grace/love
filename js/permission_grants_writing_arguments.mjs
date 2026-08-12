import { fn_name } from "./fn_name.mjs";
import { permission_write_atoms } from "./permission_write_atoms.mjs";
import { permission_run_names } from "./permission_run_names.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_add } from "./list_add.mjs";
export async function permission_grants_writing_arguments() {
  "every function holding a standing approval that both declares arguments and can reach a file write, each one given back with the arguments it declares and the writers it reaches - a report to read, not a verdict";
  "the refusal check reads names. It asks whether a parameter is called something like a command or a path, and whether the call graph reaches something that runs a command. Neither question can see what an argument BECOMES. Three functions passed it cleanly this way and had to be stopped by prose instead: one whose third argument is source code written into a file this repo then executes, one whose only argument is the position of the switch that decides what the guard refuses, and one where the argument typed in becomes a permanent exemption from the check itself. In all three the parameter name was honest and the call graph held no command runner.";
  "what they share, and the only part of it a machine can find, is that an argument reaches a file write. That is a wide net on purpose - most of what it catches will be a function writing exactly what it says it writes - because the alternative is a narrow one that goes on missing the case nobody has thought of yet. Reading a long list once beats a short list that is quietly incomplete.";
  ("deliberately a report and not a gate. Every entry needs somebody to ask what this particular argument turns into on disk, and that is a judgment; a gate would have to answer it by shape, which is the very thing that let all three through. What a reader decides here goes back into the function's own prose, where ",
    fn_name("function_grant_declined_is"),
    " can enforce it.");
  let writers = permission_write_atoms();
  let names = await permission_run_names();
  let found = [];
  for (let name of names) {
    let params = await function_params_names(name);
    let takes = list_empty_not_is(params);
    if (takes) {
      let reachable = await function_reachable_names(name);
      let reached = list_intersect(reachable, writers);
      let writes = list_empty_not_is(reached);
      if (writes) {
        let entry = {
          name,
          params,
          writers: reached,
        };
        list_add(found, entry);
      }
    }
  }
  return found;
}
