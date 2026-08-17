import { js_parse } from "./js_parse.mjs";
import { file_read } from "./file_read.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { js_names_unbound_mentioned_referenced } from "./js_names_unbound_mentioned_referenced.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { list_filter } from "./list_filter.mjs";
import { set_includes } from "./set_includes.mjs";
import { set_includes_not } from "./set_includes_not.mjs";
import { js_global_names } from "./js_global_names.mjs";
export async function bundle_names_missing(f_path, known) {
  "Every name of this repo's own that one built file reads and never defines - a reader loading that page meets a reference error the first time the line runs, with nothing in the source wrong.";
  "It is the one failure a source-side reading cannot see. A bundle is written by a build rather than by anybody, so a stale or half-written one holds a call to a function whose definition never made it in, while the file the call came from is perfectly correct and every gate over the sources stays green. Measured 2026-08-17, one shipped bundle was calling a language list it did not carry, and the page died on boot.";
  "Three narrowings turn a scope reading into a sound answer over minified vendor code. A mention no scope around it binds is the reading; of those, only the ones this repo answers to are ours to account for, which drops every library global the walk has never met; and of those, the handful of language and host names that happen to share a file name here are dropped as well, because a file called undefined does not make the keyword a missing definition.";
  "The set of names the repo answers to is handed in rather than gathered, because the sweep next door asks this of every built file and gathering fifteen thousand names once is the difference between a second and a minute.";
  let code = await file_read(f_path);
  let ast = js_parse(code);
  let referenced_nodes = js_identifiers_referenced_nodes(ast);
  let names = list_map_property_unique(referenced_nodes, "name");
  let referenced = list_unique_set(referenced_nodes);
  let unbound = js_names_unbound_mentioned_referenced(ast, referenced);
  let list = js_global_names();
  let globals = list_unique_set(list);
  function missing_is(name) {
    let unbound_is = set_includes(unbound, name);
    if (unbound_is) {
      let ours_is = set_includes(known, name);
      if (ours_is) {
        let global_not_is = set_includes_not(globals, name);
        return global_not_is;
      }
    }
    return false;
  }
  let missing = list_filter(names, missing_is);
  return missing;
}
