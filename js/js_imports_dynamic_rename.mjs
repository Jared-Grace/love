import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_import_expression_source_nodes } from "./js_import_expression_source_nodes.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_set } from "./property_set.mjs";
import { property_delete } from "./property_delete.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
export function js_imports_dynamic_rename(ast, f_name_before, f_name_after) {
  "Makes every fetch-while-running import of a renamed function's file name the new file, and makes the name read off what it fetched follow too. How many fetches were changed is handed back.";
  "A rename moves the file and every import written at the top, but a fetch inside a body is a piece of writing the rename never reads, so it kept naming a file that was not there. Nothing went red: it failed only when somebody opened that one preview.";
  "The name read off the fetched module is the function's own name, so a property read spelling the old name follows - but only in a file that fetched the old file, because anywhere else the same word is a property of some other object, and a property belongs to whatever object owns it.";
  arguments_assert(arguments, 3);
  let path_before = "./" + f_name_before + ".mjs";
  let path_after = "./" + f_name_after + ".mjs";
  let sources = js_import_expression_source_nodes(ast);
  let replaced = 0;
  for (let source of sources) {
    let same = property_equals(source, "value", path_before);
    if (same) {
      property_set(source, "value", path_after);
      property_delete(source, "raw");
      replaced++;
    }
  }
  if (equal(replaced, 0)) {
    return replaced;
  }
  let members = js_list_type(ast, "MemberExpression");
  for (let v of members) {
    let node = property_get(v, "node");
    let computed = property_get(node, "computed");
    if (computed) {
      continue;
    }
    let property = property_get(node, "property");
    let named = property_equals(property, "name", f_name_before);
    if (named) {
      property_set(property, "name", f_name_after);
    }
  }
  return replaced;
}
