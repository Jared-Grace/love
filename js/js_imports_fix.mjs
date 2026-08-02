import { js_imports_paths_fix } from "./js_imports_paths_fix.mjs";
import { list_remove } from "./list_remove.mjs";
import { property_get } from "./property_get.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { js_imports_unused } from "./js_imports_unused.mjs";
import { js_imports_shadowed_remove } from "./js_imports_shadowed_remove.mjs";
import { each } from "./each.mjs";
export async function js_imports_fix(ast) {
  "add missing BEFORE removing unused, so a wrongly-added import is caught in the same pass rather than surviving forever — same order as the relative auto-imports pass";
  let v = await js_imports_missing_add_all(ast);
  await js_imports_unused_remove(ast);
  ("counting mentions cannot see an import a local of the same name stands in front of, so ask separately");
  js_imports_shadowed_remove(ast);
  await js_imports_paths_fix(ast);
  return v;
}
