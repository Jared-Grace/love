import { js_name_set_from_node_try } from "./js_name_set_from_node_try.mjs";
import { js_literal_value_try } from "./js_literal_value_try.mjs";
import { firebase_folder_seams } from "./firebase_folder_seams.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_list_calls_named } from "./js_list_calls_named.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_node_name_text_try } from "./js_node_name_text_try.mjs";
import { value_or_if_null } from "./value_or_if_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function firebase_folder_sites() {
  "Every place a bucket address is built, paired with the function holding the folder word it was built out of - and nothing where the folder came from somewhere no function names.";
  "Every site is answered for, not only the ones that are wrong. A reading that returns the empty list is the one shape that cannot be told from a reading that asked nothing, and this is the question that shape gets asked of it most - a handful of sites is few enough that a person will believe a clean answer without checking it.";
  "The word is looked for one step back as well as at the argument itself, because it is almost never handed over where it is made: the folder is fetched on one line and passed on the next. A reading that stopped at the argument would have called every site here unheld and been believed.";
  "Nothing rather than a complaint when no function names the folder. Most of what reaches these slots is a name worked out while the command runs - which app is being deployed, which function is being sent up - and none of that is a written word at all, so there is nothing there to freeze. Telling those apart from a word somebody typed is the job of whoever reads this, and it needs the answer to be neutral.";
  let seams = firebase_folder_seams();
  let identifiers = await data_identifiers_get();
  let sites = [];
  for (let seam of seams) {
    let builder = property_get(seam, "builder");
    let index = property_get(seam, "index");
    let callers = property_or_null(identifiers, builder);
    for (let caller of callers) {
      let tree = await function_ast(caller);
      let calls = js_list_calls_named(tree, builder);
      for (let call of calls) {
        let args = property_get(call, "args");
        let folder = list_get_or_null(args, index);
        let unwritten = null_is(folder);
        if (unwritten) {
          continue;
        }
        let called_directly = js_call_callee_name_try(folder);
        let passed_on = js_node_name_text_try(folder);
        let source = js_name_set_from_node_try(tree, passed_on);
        let set_from = js_call_callee_name_try(source);
        let held_by = value_or_if_null(called_directly, set_from);
        ("The written word is asked for separately, and both where it stands and one step back, because a word typed into the slot and a word set on the line above are the same mistake wearing two shapes. Neither is held by anything, so neither can be watched, and reading only the first would have made the second the way to write one nothing complains about.");
        let written_here = js_literal_value_try(folder);
        let written_above = js_literal_value_try(source);
        let written = value_or_if_null(written_here, written_above);
        let site = {
          caller,
          builder,
          held_by,
          written,
        };
        list_add(sites, site);
      }
    }
  }
  return sites;
}
