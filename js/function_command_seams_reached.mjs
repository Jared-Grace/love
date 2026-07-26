import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { functions_command_seams } from "./functions_command_seams.mjs";
import { function_imports_beyond_infrastructure } from "./function_imports_beyond_infrastructure.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
export async function function_command_seams_reached(f_name) {
  "Which of the command-running functions this one can reach through its imports, with the plumbing edges left out. An empty answer is the useful one: nothing this function calls, however deep, ends at a shell or an eval, so handing it a name to run is handing over a name and not the machine.";
  "Reachability is asked rather than trusted because the caller of a plugin cannot read the plugin, and the import graph is the only thing that answers for code nobody opened.";
  await function_exists_assert_json(f_name, {
    hint: "the function should exist to ask what it can reach",
  });
  let seams = functions_command_seams();
  let reached = [];
  function lambda(v) {
    let node = property_get(v, "node");
    let seam = list_includes(seams, node);
    if (seam) {
      list_add_if_not_includes(reached, node);
    }
  }
  await visit_unique_async(
    f_name,
    function_imports_beyond_infrastructure,
    lambda,
  );
  return reached;
}
