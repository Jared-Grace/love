import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_storage_app } from "./app_g_storage_app.mjs";
import { app_g_dev_index_open_key } from "./app_g_dev_index_open_key.mjs";
import { storage_session_set } from "./storage_session_set.mjs";
export function app_g_dev_index_open_persist(open_paths) {
  arguments_assert(arguments, 1);
  ("remember which category nodes are expanded ACROSS the reload that opening a route triggers: the open set lives in session storage (per tab, survives the hash-change reload, gone on tab close — dev-only state), so coming BACK to #index from a game screen restores the same drilled-open path instead of collapsing everything.");
  ("the store is reached through the repo's own storing function rather than spoken to directly. a file that says sessionStorage itself keeps a word no reading can see, so a rename of the word cannot be followed and nothing can tell which words this app has left in people's browsers.");
  let key = app_g_dev_index_open_key();
  let paths = [...open_paths];
  let app_fn = app_g_storage_app();
  storage_session_set(app_fn, key, paths);
}
