import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
export function app_g_dev_index_open_persist(
  open_paths,
  sessionStorage,
  open_key,
) {
  arguments_assert(arguments, 3);
  ("remember which category nodes are expanded ACROSS the reload that opening a route triggers: the open set lives in sessionStorage (per tab, survives the hash-change reload, gone on tab close — dev-only state), so coming BACK to #index from a game screen restores the same drilled-open path instead of collapsing everything.");
  let v = json_to([...open_paths]);
  sessionStorage.setItem(open_key, v);
}
