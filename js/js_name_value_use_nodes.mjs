import { fn_name } from "./fn_name.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_list_calls_named } from "./js_list_calls_named.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { js_function_node_find_named_list } from "./js_function_node_find_named_list.mjs";
import { list_difference } from "./list_difference.mjs";
export function js_name_value_use_nodes(ast, f_name) {
  "every place in this file that hands the name over as a value instead of calling it";
  ("a function handed over as a value has its parameter list fixed by whoever ends up calling it and that caller is nowhere in sight. ",
    fn_name("app_bible"),
    " hands ",
    fn_name("app_bible_verse_switch_button"),
    " to ",
    fn_name("app_shared_bible_read"),
    " which calls it with four arguments - dropping the third parameter would have slid the verse number into the slot before it and sent the button to the wrong verse");
  ("the three benign ways the name can stand in a file are subtracted by node rather than by counting - the callee of a call to it, the specifier of the import that brought it in and the id of its own declaration");
  let named = js_identifiers_named(ast, f_name);
  let calls = js_list_calls_named(ast, f_name);
  let callees = list_map_property(calls, "callee");
  let imports = js_imports_declarations(ast);
  let declarations = list_map_property(imports, "declaration");
  let imported = list_map_squash(declarations, js_identifiers);
  let functions = js_function_node_find_named_list(ast, f_name);
  let ids = list_map_property(functions, "id");
  let uncalled = list_difference(named, callees);
  let unimported = list_difference(uncalled, imported);
  let value_uses = list_difference(unimported, ids);
  return value_uses;
}
