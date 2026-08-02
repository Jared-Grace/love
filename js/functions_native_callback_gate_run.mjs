import { fn_name } from "./fn_name.mjs";
import { functions_native_callback_imported } from "./functions_native_callback_imported.mjs";
import { js_array_methods_callback } from "./js_array_methods_callback.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
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
  let methods = js_array_methods_callback();
  let joined = list_join_comma(methods);
  console.log("methods that pass an index after the item: " + joined);
  let offenders = await functions_native_callback_imported();
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let method = property_get(offender, "method");
    let passed = property_get(offender, "passed");
    console.log(
      "BARE CALLBACK  " + f_name + "  ." + method + "(" + passed + ")",
    );
  }
  let size = list_size(offenders);
  console.log("\nbare imported callbacks " + size);
  let any = greater_than(size, 0);
  if (any) {
    let f_name2 = fn_name("list_map");
    let combined = text_combine_multiple([
      "native callback gate: ",
      size,
      " places hand an imported name straight to a native array method, which passes the index and the whole list after the item - wrap it in a lambda taking one argument, or call ",
      f_name2,
      " and its siblings, which hand the lambda exactly one thing",
    ]);
    throw new Error(combined);
  }
  let r = {
    methods: list_size(methods),
    bare: 0,
  };
  return r;
}
