import { js_name_set_from_call_try } from "./js_name_set_from_call_try.mjs";
import { js_call_argument_at_try } from "./js_call_argument_at_try.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_storage_local_key_scan } from "./js_storage_local_key_scan.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not_equal } from "./not_equal.mjs";
export function js_storage_local_key_word_f_names(ast, seams) {
  "Every function this file asks for the word it writes into a key in somebody's browser storage, by name. Read-only, pure.";
  "Its sibling next door collects the words written out at these same calls, and between them they are the one question asked twice: which words reach a browser from here. A word written out is the whole answer where it stands; a word asked for by name is only half of one, because the word itself lives in the function named - so this hands back the name and leaves resolving it to the reading that is allowed to open another file.";
  "This exists because moving a published word behind a name is the RIGHT edit and the reading could not see it. A key is on disks this repo will never see again, so spelling it in one place is exactly what should happen to it - and the moment it happened, the word vanished from a reading that only looked at the storing line, and the gate watching for a lost setting said the setting was lost. The safest edit available read as the most dangerous one there is.";
  "The same one step back as the reading of written words: the call is either the argument itself or the thing the argument was set from on the line above.";
  arguments_assert(arguments, 2);
  let found = [];
  function collect(node) {
    let word_node = js_call_argument_at_try(node, "2");
    let absent = equal(word_node, null);
    if (absent) {
      return;
    }
    let called = js_call_callee_name_try(word_node);
    let direct = not_equal(called, null);
    if (direct) {
      list_add(found, called);
      return;
    }
    let variable = js_identifier_name_try(word_node);
    let plain = not_equal(variable, null);
    if (plain) {
      let above = js_name_set_from_call_try(ast, variable);
      let set_here = not_equal(above, null);
      if (set_here) {
        list_add(found, above);
      }
    }
  }
  let unique = js_storage_local_key_scan(ast, seams, collect, found);
  return unique;
}
