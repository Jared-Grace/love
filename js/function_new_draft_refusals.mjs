import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_parse } from "./js_parse.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_function_flow_read } from "./js_function_flow_read.mjs";
export async function function_new_draft_refusals(
  f_name,
  declaration,
  import_lines,
) {
  "Every reason a new function must not land unasked: it brings in a package, reaches the machine directly, reaches the language's machinery, or names something outside the repo.";
  "★ NO NEW FUNCTION TOUCHES THE MACHINE UNSEEN, BECAUSE THE WALKS CANNOT FOLLOW IT THERE. The automatic grant follows calls to repo functions, and the safe edit lets a draft call a function taking no arguments. So a new function holding the file system itself would pass both, and every fence on the repo's file steps would stand aside. Stopping it at this door leaves those steps as the only way to the disk.";
  "Empty means the draft only calls the repo's own functions and the plain built-in names.";
  arguments_assert(arguments, 3);
  let refusals = [];
  if (greater_than(import_lines.length, 0)) {
    refusals.push("the draft brings in a package: " + import_lines.join(" "));
  }
  let code_declaration = js_unparse(declaration);
  let code_export = js_code_export(code_declaration);
  let landed = js_parse(code_export);
  let f_names = await functions_names();
  let known = new Set([...f_names, f_name]);
  let read = js_function_flow_read(f_name, landed, known);
  for (let why of [...read.machine, ...read.strange]) {
    refusals.push("the draft reaches outside the repo: " + why);
  }
  for (let why of read.reflect) {
    refusals.push("the draft reaches the language's machinery: " + why);
  }
  return refusals;
}
