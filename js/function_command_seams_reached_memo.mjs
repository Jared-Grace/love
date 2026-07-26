import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { functions_command_seams } from "./functions_command_seams.mjs";
import { function_imports_beyond_infrastructure_memo } from "./function_imports_beyond_infrastructure_memo.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
export async function function_command_seams_reached_memo(f_name, remembered) {
  "which of the command-running functions this one can reach through its imports, reusing what an earlier walk already read";
  "the answer is the same one the single-name version gives — the object handed in only saves reading a file twice, so asking for many names costs one pass over the graph rather than one pass each";
  ("the walk itself is the same one whatever is being looked for, so it lives once and is handed the set to look for - this one names the command-running set and nothing else");
  let seams = functions_command_seams();
  let reached = await function_seams_reached_memo(f_name, seams, remembered);
  return reached;
}
