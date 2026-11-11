import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_visit_import_specifiers_names } from "./js_visit_import_specifiers_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_concat } from "./list_concat.mjs";
import { functions_closure_source_hash } from "./functions_closure_source_hash.mjs";
export async function reply_proposal_trial_code_hash(source, whole) {
  arguments_assert(arguments, 2);
  ("One short word for all the code a trial of one waiting change reads: the reply rules as they stand, the new files the change names, and everything the changed file would import. While it stays the same, the change's worked messages get the same answers, so answers kept under it can be handed back instead of tried again.");
  ("★ THE NEW FILES AND THE CHANGED FILE'S IMPORTS ARE COUNTED, NOT ONLY THE LIVE RULES. A new file is reached by no live rule until the change goes in, so the word for the live rules alone stays the same while that file is edited, and a kept answer would then be about a file that is no longer there.");
  let ast = js_parse(source);
  let imported = js_visit_import_specifiers_names(ast);
  let live = [
    fn_name("reply_attempt"),
    fn_name("app_shared_message_reply_choices"),
  ];
  let named = list_concat(live, whole);
  let reached = list_concat(named, imported);
  let hash = await functions_closure_source_hash(reached);
  return hash;
}
