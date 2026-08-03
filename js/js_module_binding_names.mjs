import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_map } from "./list_map.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
export function js_module_binding_names(ast) {
  arguments_assert(arguments, 1);
  ("Every name a file binds at its outermost level - what any function written at that level can reach without being handed it. Imports, top-level variables, and the functions and classes declared there, including the exported one.");
  ("This is the question a lift has to ask. A function moved out to the top of the file lands beside these, so a name that is one of them is not something it closed over and must not become a parameter. Without it, lifting a second helper out of the same file hands it the first one as an argument - which runs, and reads as though the two were unrelated.");
  ("Names bound deeper down are deliberately absent. A name declared inside a function belongs to that function, so it is exactly what a lift does have to carry out with it.");
  let names = js_imports_local_names(ast);
  let body = property_get(ast, "body");
  function lambda(statement) {
    let held = statement;
    let type = property_get(statement, "type");
    let exports = ["ExportNamedDeclaration", "ExportDefaultDeclaration"];
    let exported_is = list_includes(exports, type);
    if (exported_is) {
      held = property_or_null(statement, "declaration");
    }
    let missing = null_is(held);
    if (missing) {
      return;
    }
    let held_type = property_get(held, "type");
    let variable_is = equal(held_type, "VariableDeclaration");
    if (variable_is) {
      let declarators = property_get(held, "declarations");
      let declared = list_map(declarators, js_function_declaration_name);
      list_add_multiple(names, declared);
      return;
    }
    let declarations = ["FunctionDeclaration", "ClassDeclaration"];
    let declaration_is = list_includes(declarations, held_type);
    if (declaration_is) {
      let name = js_function_declaration_name(held);
      list_add(names, name);
    }
  }
  each(body, lambda);
  return names;
}
