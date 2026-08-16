import { arguments_assert } from "./arguments_assert.mjs";
import { js_rebound_names } from "./js_rebound_names.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
export function js_loop_outer_rebound_names(loop) {
  arguments_assert(arguments, 1);
  ("Every name this one loop points somewhere else without having declared it - the names it walks along changing, each of which was bound before the loop opened.");
  ("This is the reading that says a loop cannot be carried away into a function of its own. Pointing a name somewhere else splits it in two the moment the two sides stop being one scope, so a loop that keeps re-pointing an outer name is a run whose parts only mean anything together.");
  ("The loop's own declarations are taken out, header and body alike, because a name the loop itself binds is gone when the loop ends and can travel wherever the loop travels.");
  let rebound = js_rebound_names(loop);
  let own = js_declared_names(loop);
  let outer = list_without_multiple(rebound, own);
  return outer;
}
