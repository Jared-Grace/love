import { js_binding_names } from "./js_binding_names.mjs";
import { js_imports } from "./js_imports.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
export function js_name_unbound_assert(ast, name) {
  "refuse a new name this file already uses for something else. Renaming a hidden binding onto a name that is itself taken would move the hiding rather than end it.";
  let names = js_binding_names(ast);
  let imports = js_imports(ast);
  let taken = list_concat(names, imports);
  let bound = list_includes(taken, name);
  not_assert_json(bound, {
    hint: "this file already binds or imports that name — would another name do?",
    name,
  });
}
