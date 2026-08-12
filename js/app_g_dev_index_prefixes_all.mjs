import { fn_name } from "./fn_name.mjs";
import { app_g_dev_index_prefixes_derived } from "./app_g_dev_index_prefixes_derived.mjs";
import { app_g_dev_index_prefixes } from "./app_g_dev_index_prefixes.mjs";
import { object_merge_replace } from "./object_merge_replace.mjs";
export function app_g_dev_index_prefixes_all(names) {
  ("where every #index route is filed: what the names themselves say (",
    fn_name("app_g_dev_index_prefixes_derived"),
    ") with what was typed by hand (",
    fn_name("app_g_dev_index_prefixes"),
    ") laid over the top");
  ("the hand list WINS, because it is the only one that can say something a name cannot. it holds the paths that are two levels deep and the ones whose folder is a word the route is not called - and a route it names is a route somebody decided about, which beats a rule");
  ("what it no longer has to hold is a family that files itself. every day_* route was listed there one line each, and a new one was filed by remembering to add a line - which is exactly the line that was missing when day_baptisms_collect turned up at the top level instead of under day");
  let names_derived = app_g_dev_index_prefixes_derived(names);
  let named = app_g_dev_index_prefixes();
  object_merge_replace(names_derived, named);
  return names_derived;
}
