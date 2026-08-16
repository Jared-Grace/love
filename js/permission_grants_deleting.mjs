import { permission_grant_names } from "./permission_grant_names.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { functions_delete_seams } from "./functions_delete_seams.mjs";
import { function_seams_reached_paths_memo } from "./function_seams_reached_paths_memo.mjs";
import { permission_grant_seam_chains_text } from "./permission_grant_seam_chains_text.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { function_ast_memo } from "./function_ast_memo.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function permission_grants_deleting() {
  "Every standing approval that takes arguments and can reach a function erasing whatever its argument names, with the chain of calls that gets there. Read-only.";
  "It reports and never changes anything, because what it finds is not a fault to repair. Each answer is a grant a person weighed and wanted, and the chain is the evidence for weighing it again - so the reading has to arrive before any decision rather than instead of one.";
  "It is not a gate on purpose, and the reason is arithmetic rather than caution. Thirty-six standing grants answer to this today, every one of them a deliberate approval whose deleting is the thing the function is for: renaming a function removes the file the old name lived in, building clears the stale output first, freezing a tree for a commit starts the copy from nothing. Making it fail the build would turn all thirty-six red at once, and the only way back to green is typing thirty-six blessings by hand - which the blessing command insists on, for a good reason of its own. That is a bill somebody has to agree to before it is run up, not a thing to spring on a folder ten of us are working in.";
  "What it exists for is the case the other readings cannot see. Every other reason a grant is refused is read off a name - a parameter spelled like a path, a seam that runs commands, a seam that writes rules - and the folder copier has none of those while removing its target folder and everything under it. Asked whether it could be granted, the check said yes. So the gap is real and this is what shows it, whether or not it is ever wired into a refusal.";
  let names = permission_grant_names();
  let context = await permission_grant_context();
  let remembered = property_get(context, "remembered");
  let parsed = property_get(context, "parsed");
  let live = property_get(context, "live");
  let seams = functions_delete_seams();
  let found = [];
  for (let name of names) {
    let alive = live.includes(name);
    if (not(alive)) {
      continue;
    }
    let ast = await function_ast_memo(name, parsed);
    let params = js_flo_params_get(ast);
    let takes_arguments = greater_than(params.length, 0);
    if (not(takes_arguments)) {
      continue;
    }
    let paths = await function_seams_reached_paths_memo(
      name,
      seams,
      remembered,
    );
    let reached = object_property_names(paths);
    let erases = greater_than(reached.length, 0);
    if (not(erases)) {
      continue;
    }
    let chains = permission_grant_seam_chains_text(paths);
    list_add(found, {
      name,
      chains,
    });
  }
  let r = {
    granted: names.length,
    found,
  };
  return r;
}
