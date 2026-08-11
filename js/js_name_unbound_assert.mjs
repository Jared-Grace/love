import { js_name_taken_is } from "./js_name_taken_is.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
export function js_name_unbound_assert(ast, name) {
  "refuse a new name this file already uses for something else. Renaming a hidden binding onto a name that is itself taken would move the hiding rather than end it.";
  let bound = js_name_taken_is(ast, name);
  not_assert_json(bound, {
    hint: "this file already binds or imports that name — would another name do?",
    name,
  });
}
