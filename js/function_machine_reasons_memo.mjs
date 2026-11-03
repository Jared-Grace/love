import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { function_ast_memo } from "./function_ast_memo.mjs";
import { js_function_flow_read } from "./js_function_flow_read.mjs";
import { property_set } from "./property_set.mjs";
export async function function_machine_reasons_memo(f_name, context) {
  "Every way one function's own source reaches outside the repo's functions, remembered in the shared answers so a sweep reads each function once.";
  "It is the same reading the door for new functions uses, so what stops a draft from landing and what stops a landed function from granting itself cannot disagree.";
  let remembered = property_get(context, "machine_reasons");
  let known_before = property_exists(remembered, f_name);
  if (known_before) {
    let reasons_before = property_get(remembered, f_name);
    return reasons_before;
  }
  let parsed = property_get(context, "parsed");
  let known = property_get(context, "known");
  let ast = await function_ast_memo(f_name, parsed);
  let read = js_function_flow_read(f_name, ast, known);
  let reasons = [...read.machine, ...read.strange, ...read.reflect];
  property_set(remembered, f_name, reasons);
  return reasons;
}
