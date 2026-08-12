import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_native_callback_imported } from "./functions_native_callback_imported.mjs";
import { js_array_methods_callback } from "./js_array_methods_callback.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_native_callback_gate_run() {
  "Gate: no imported name is handed straight to a native array method as its callback.";
  "This ratchets against ZERO rather than a baseline. There was exactly one site when";
  ("the question was first asked - ",
    fn_name("example_rejection_run"),
    " mapping ",
    fn_name("js_parse_statement"),
    " - and");
  ("it was fixed on 2026-08-02, so there is nothing to grandfather.");
  ("What makes it worth a gate is not the count but that the repo MANUFACTURES the break:");
  ("the auto-added argument count is a sweep, and the day it reaches a function used this");
  ("way, the index the method passes after the item becomes an extra argument and the call");
  ("throws. The site that broke was never edited, so nothing points at it.");
  ("The fix is always the same and never changes behaviour - hand the call a list helper,");
  ("which passes the item and nothing else, or wrap the name in a lambda taking one thing.");
  ("The methods are printed even when nothing is wrong: a list read from somewhere else is");
  ("the one thing that could make this pass while asking nothing.");
  ("The methods are handed back rather than printed, and that keeps the proof while");
  ("dropping a leak. Printed, they were read back out of a failure as an accusation -");
  ("and one of them is called each, which is a function of this repo that nearly every");
  ("app ships. Handed back, a green run still shows them at the seam.");
  ("The offenders are thrown as a record for the same reason. What each site passed and");
  ("which method took it are advice, and the name passed is the innocent one: it is a");
  ("perfectly good function being handed over the wrong way by somebody else.");
  let methods = js_array_methods_callback();
  let offenders = await functions_native_callback_imported();
  let names = list_map_property(offenders, "f_name");
  let f_name = fn_name("list_map");
  let advice = text_combine_multiple([
    "these hand an imported name straight to a native array method, which passes the index and the whole list after the item - wrap it in a lambda taking one argument, or call ",
    f_name,
    " and its siblings, which hand the lambda exactly one thing",
  ]);
  let hint = {
    advice,
    methods,
    offenders,
  };
  list_empty_is_assert_json(names, {
    hint,
  });
  let r = {
    methods,
    bare: 0,
  };
  return r;
}
