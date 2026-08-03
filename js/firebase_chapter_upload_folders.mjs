import { js_node_name_text_try } from "./js_node_name_text_try.mjs";
import { js_name_set_from_call_try } from "./js_name_set_from_call_try.mjs";
import { value_or_if_null } from "./value_or_if_null.mjs";
import { fn_name } from "./fn_name.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_list_calls_named } from "./js_list_calls_named.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { list_add } from "./list_add.mjs";
export async function firebase_chapter_upload_folders() {
  "Every place a chapter's upload address is built, paired with the function holding the folder word it was built out of - and nothing where no function holds it.";
  "The first thing that call receives is a folder on the shared bucket, and files are already sitting under it. So the word may never move, whatever it is spelled like - and the ones spelled like function names hide this best, because a rename of the function of that name reads as safe and moves nothing on the bucket.";
  "Every site is answered for, not only the ones that are wrong. A reading that returns the empty list is the one shape that cannot be told from a reading that asked nothing, and this is the question that shape gets asked of it most - eight sites is few enough that a person will believe a clean answer without checking it.";
  "Reading off the tree rather than the text is what makes the answer mean anything. The text of a caller shows the word standing next to the call; only the tree says whether the word arrived as a call to a function or was typed there.";
  let builder = fn_name("firebase_chapter_upload_path");
  let identifiers = await data_identifiers_get();
  let callers = property_or_null(identifiers, builder);
  let sites = [];
  for (let caller of callers) {
    let tree = await function_ast(caller);
    let calls = js_list_calls_named(tree, builder);
    for (let call of calls) {
      let args = property_get(call, "args");
      let folder = list_first(args);
      ("Whatever stands there is asked for the name it calls, and then, when it is a name rather than a call, for what that name was set from. Every caller here does it the second way - the folder is fetched on one line and passed on the next - so a reading that stopped at the argument would have called all eight of them unheld and been believed.");
      let called_directly = js_call_callee_name_try(folder);
      let passed_on = js_node_name_text_try(folder);
      let set_from = js_name_set_from_call_try(tree, passed_on);
      let held_by = value_or_if_null(called_directly, set_from);
      let site = {
        caller,
        held_by,
      };
      list_add(sites, site);
    }
  }
  return sites;
}
