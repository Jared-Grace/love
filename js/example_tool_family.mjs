import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
("The tool-family label an example clusters under in the menu — same family = one sub-header.");
("Cross-fn families get a friendly word: rename covers the plain + the prefix rename;");
("parameters covers add + delete; fold covers all three fold entry points. Anything unmapped");
("returns its own fn name, so same-fn examples still cluster and unique tools stay lone (the");
("menu only draws a sub-header for a run of two or more, so a lone tool shows no header).");
export function example_tool_family(fn) {
  if (equal(fn, fn_name("function_rename"))) {
    let r = "rename";
    return r;
  }
  if (equal(fn, fn_name("functions_rename_if_starts_with"))) {
    let r2 = "rename";
    return r2;
  }
  if (equal(fn, fn_name("function_delete_unused"))) {
    let r3 = "delete unused";
    return r3;
  }
  if (equal(fn, fn_name("function_param_new"))) {
    let r4 = "parameters";
    return r4;
  }
  if (equal(fn, fn_name("function_params_delete"))) {
    let r5 = "parameters";
    return r5;
  }
  if (equal(fn, fn_name("js_fold"))) {
    let r6 = "fold";
    return r6;
  }
  if (equal(fn, fn_name("js_fold_all"))) {
    let r7 = "fold";
    return r7;
  }
  if (equal(fn, fn_name("js_fold_auto"))) {
    let r8 = "fold";
    return r8;
  }
  if (equal(fn, fn_name("js_imports_auto_relative"))) {
    let r9 = "imports";
    return r9;
  }
  return fn;
}
