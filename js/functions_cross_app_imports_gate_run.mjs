import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_cross_app_imports } from "./functions_cross_app_imports.mjs";
import { functions_cross_app_imports_baseline_path } from "./functions_cross_app_imports_baseline_path.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_cross_app_imports_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no app newly reaches into another app.");
  ("The two gates beside this one ask whether code belonging to no app depends on a single app, which is the shared closure. Neither of them can see this one, because both only ask about functions belonging to no app, and here both sides belong to one. So an app quietly taking a button from the app next door passed every check the repo had.");
  ("The cost of one of these is the same as the cost of a shared unit reaching into an app: whatever the second app carries, the first now carries too. It is harder to notice, because the import reads as ordinary reuse of something that already works, and nothing about it looks like a boundary being crossed.");
  ("Measured against what the repo already carried rather than against zero, and a good deal of what it holds will never clear. Some apps are deliberately built out of another - a translated twin, a reader four apps share - and a scratch app naturally names the apps it is scratching with. The record only shrinks, so what it refuses is a new one.");
  let offenders = await functions_cross_app_imports();
  let path = functions_cross_app_imports_baseline_path();
  let name_write = fn_name("functions_cross_app_imports_baseline_write");
  await baseline_names_gate_generic(
    offenders,
    path,
    "one app reaches into another and did not before - move what it needs into shared code, or let the app that owns it hand it over",
    name_write,
  );
  let r = {
    checked: list_size(offenders),
    added: 0,
    stale: 0,
  };
  return r;
}
