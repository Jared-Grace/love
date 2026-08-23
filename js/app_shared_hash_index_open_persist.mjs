import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_storage_app } from "./app_g_storage_app.mjs";
import { app_shared_hash_index_open_key } from "./app_shared_hash_index_open_key.mjs";
import { storage_session_set } from "./storage_session_set.mjs";
export function app_shared_hash_index_open_persist(app_fn, open_paths) {
  arguments_assert(arguments, 2);
  ("remember which category nodes are expanded ACROSS the reload that opening a route triggers: the open set lives in session storage (per tab, survives the hash-change reload, gone on tab close — dev-only state), so coming BACK to #index from a route restores the same drilled-open path instead of collapsing everything.");
  ("the store is reached through the repo's own storing function rather than spoken to directly. a file that says sessionStorage itself keeps a word no reading can see, so a rename of the word cannot be followed and nothing can tell which words this app has left in people's browsers.");
  ("WHICH app is storing arrives as an argument rather than being named here, and that is the whole of what makes this directory shareable. Two pages now draw the same drill-down - the game's dev routes and the sandbox's previews - and each remembers its own drilled-open path, because the key is the same word under two different app names rather than one word both of them write over.");
  let key = app_shared_hash_index_open_key();
  let paths = [...open_paths];
  storage_session_set(app_fn, key, paths);
}
