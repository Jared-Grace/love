import { fn_name } from "./fn_name.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { literals_frozen_names } from "./literals_frozen_names.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_list_calls_named } from "./js_list_calls_named.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function firebase_chapter_upload_folders_unfrozen() {
  "Every place a chapter's upload address is built out of a folder word that no watched function holds - each answer naming the function building the address and what it handed over as the folder.";
  "The first thing that call receives is a folder on the shared bucket, and files are already sitting under it. So the word may never move, whatever it is spelled like - and the ones spelled like function names hide this best, because a rename of the function of that name reads as safe and moves nothing on the bucket.";
  "A word written straight into the line that builds the address is unwatched by construction: the freeze record is keyed by function, so a value with no function holding it has nothing to freeze, and retyping it reads as an ordinary edit to an ordinary line.";
  "Reading off the tree rather than the text is what makes the answer mean anything. The text of a caller shows the word standing next to the call; only the tree says whether the word arrived as a call to a function or was typed there.";
  "This asks a narrower question than it could: not whether the folder is right, which nobody here can know, but whether anything at all is watching it. That is answerable, and it is the whole difference between a wrong word being loud and being silent.";
  let builder = fn_name("firebase_chapter_upload_path");
  let identifiers = await data_identifiers_get();
  let callers = property_or_null(identifiers, builder);
  let watched = literals_frozen_names();
  let offenders = [];
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
      let held_by = first_not_null(called_directly, set_from);
      let unheld = null_is(held_by);
      if (unheld) {
        let item = text_combine_multiple([caller, " -> nothing"]);
        list_add(offenders, item);
        continue;
      }
      let frozen = list_includes(watched, held_by);
      if (frozen) {
        continue;
      }
      let item2 = text_combine_multiple([caller, " -> ", held_by]);
      list_add(offenders, item2);
    }
  }
  offenders.sort();
  return offenders;
}
