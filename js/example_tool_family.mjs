import { equal } from "./equal.mjs";
import { function_rename } from "./function_rename.mjs";
import { functions_rename_if_starts_with } from "./functions_rename_if_starts_with.mjs";
import { function_delete_unused } from "./function_delete_unused.mjs";
import { function_param_new } from "./function_param_new.mjs";
import { function_params_delete } from "./function_params_delete.mjs";
import { js_fold } from "./js_fold.mjs";
import { js_fold_all } from "./js_fold_all.mjs";
import { js_fold_auto } from "./js_fold_auto.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
("The tool-family label an example clusters under in the menu — same family = one sub-header.");
("Cross-fn families get a friendly word: rename covers the plain + the prefix rename;");
("parameters covers add + delete; fold covers all three fold entry points. Anything unmapped");
("returns its own fn name, so same-fn examples still cluster and unique tools stay lone (the");
("menu only draws a sub-header for a run of two or more, so a lone tool shows no header).");
export function example_tool_family(fn) {
  if (equal(fn, function_rename.name)) {
    let r = "rename";
    return r;
  }
  if (equal(fn, functions_rename_if_starts_with.name)) {
    let r2 = "rename";
    return r2;
  }
  if (equal(fn, function_delete_unused.name)) {
    let r3 = "delete unused";
    return r3;
  }
  if (equal(fn, function_param_new.name)) {
    let r4 = "parameters";
    return r4;
  }
  if (equal(fn, function_params_delete.name)) {
    let r5 = "parameters";
    return r5;
  }
  if (equal(fn, js_fold.name)) {
    let r6 = "fold";
    return r6;
  }
  if (equal(fn, js_fold_all.name)) {
    let r7 = "fold";
    return r7;
  }
  if (equal(fn, js_fold_auto.name)) {
    let r8 = "fold";
    return r8;
  }
  if (equal(fn, js_imports_auto_relative.name)) {
    let r9 = "imports";
    return r9;
  }
  return fn;
}
