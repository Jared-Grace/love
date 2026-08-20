import { functions_cross_app_imports_walked } from "./functions_cross_app_imports_walked.mjs";
import { property_get } from "./property_get.mjs";
import { baseline_names_gate_walked_advice_generic } from "./baseline_names_gate_walked_advice_generic.mjs";
import { functions_app_import_advice_curried } from "./functions_app_import_advice_curried.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_cross_app_imports_baseline_path } from "./functions_cross_app_imports_baseline_path.mjs";
export async function functions_cross_app_imports_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no app newly reaches into another app.");
  ("The two gates beside this one ask whether code belonging to no app depends on a single app, which is the shared closure. Neither of them can see this one, because both only ask about functions belonging to no app, and here both sides belong to one. So an app quietly taking a button from the app next door passed every check the repo had.");
  ("The cost of one of these is the same as the cost of a shared unit reaching into an app: whatever the second app carries, the first now carries too. It is harder to notice, because the import reads as ordinary reuse of something that already works, and nothing about it looks like a boundary being crossed.");
  ("Measured against what the repo already carried rather than against zero, and a good deal of what it holds will never clear. Some apps are deliberately built out of another - a translated twin, a reader four apps share - and a scratch app naturally names the apps it is scratching with. The record only shrinks, so what it refuses is a new one.");
  ("What it says about itself is how many app-owned functions it opened, not how many were wrong. Counting the offenders said nothing at all: the number it printed was the size of a record that only shrinks, so it read as steady while the walk under it could have stopped opening anything and never said so.");
  let told = await functions_cross_app_imports_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = functions_cross_app_imports_baseline_path();
  let name_write = fn_name("functions_cross_app_imports_baseline_write");
  let hint_get = functions_app_import_advice_curried(
    "one app reaches into another and did not before - move what it needs into shared code, or let the app that owns it hand it over",
  );
  let r = await baseline_names_gate_walked_advice_generic(
    walked,
    offenders,
    path,
    hint_get,
    name_write,
  );
  return r;
}
