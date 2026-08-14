import { function_seams_reached_steerable_memo } from "./function_seams_reached_steerable_memo.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { functions_dispatch_seams } from "./functions_dispatch_seams.mjs";
import { functions_seam_fences } from "./functions_seam_fences.mjs";
import { function_seams_reached_memo } from "./function_seams_reached_memo.mjs";
import { function_ast_memo } from "./function_ast_memo.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
export async function permission_grants_dispatch_unfenced() {
  "Which functions already holding a standing approval run whatever repo function their arguments name, without anything in front of that name to refuse it. Those are the ones where a command line decides what runs and nobody is asked first.";
  "Three things have to be true together, and each on its own is ordinary. Declaring arguments is ordinary. Reaching a dispatcher is ordinary and is how the repo works at all - a function that runs the name held in the user's own config reaches one and is handed nothing. Reaching no fence is ordinary in anything that never dispatches. Only the three at once describe a door.";
  "Reaching the dispatcher is asked along a chain that can carry an argument rather than along any chain at all. Asked the plain way first, this named twenty-eight functions and twenty-seven of them were the same untypeable path through the service account reader, which takes nothing and runs the name the user's own config holds. A report that is right about one entry in twenty-eight teaches its reader to skim it.";
  "The two answers are not worth the same. An empty fence list is conclusive, because nothing the function imports however deep can refuse a name. A non-empty one only means a fence is somewhere on the graph, which is a reason to go and read the function rather than a clean bill - the same asymmetry the command-seam walk already carries.";
  "Asked of the granted names rather than of every function on purpose. An ungranted dispatcher still prompts, so the human sees the name being handed over and can refuse it; a granted one does not, which is the whole difference between a hazard and a hole.";
  let granted = permission_grant_names();
  let seams = functions_dispatch_seams();
  let fences = functions_seam_fences();
  let remembered = {};
  let parsed = {};
  let unfenced = [];
  let fenced = [];
  for (let unaliased of granted) {
    let dispatch = await function_seams_reached_steerable_memo(
      unaliased,
      seams,
      remembered,
      parsed,
    );
    let dispatches = greater_than(dispatch.length, 0);
    if (not(dispatches)) {
      continue;
    }
    let ast = await function_ast_memo(unaliased, parsed);
    let params = js_flo_params_get(ast);
    let takes_arguments = greater_than(params.length, 0);
    if (not(takes_arguments)) {
      continue;
    }
    let fences_reached = await function_seams_reached_memo(
      unaliased,
      fences,
      remembered,
    );
    let bare = list_empty_is(fences_reached);
    let door = and(takes_arguments, bare);
    if (door) {
      list_add(unfenced, {
        name: unaliased,
        dispatch,
      });
      continue;
    }
    list_add(fenced, {
      name: unaliased,
      dispatch,
      fences: fences_reached,
    });
  }
  let report = {
    checked: granted.length,
    unfenced,
    fenced,
  };
  return report;
}
