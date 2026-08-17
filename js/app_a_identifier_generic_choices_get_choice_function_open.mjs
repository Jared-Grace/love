import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_function_on_keydown_remove } from "./app_a_function_on_keydown_remove.mjs";
import { app_a_function_select } from "./app_a_function_select.mjs";
import { list_add } from "./list_add.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { properties_get } from "./properties_get.mjs";
import { app_a_functions_overlay_generic } from "./app_a_functions_overlay_generic.mjs";
export function app_a_identifier_generic_choices_get_choice_function_open(
  r4,
  a,
  name,
  choices,
) {
  arguments_assert(arguments, 4);
  let includes = property_get(r4, "includes");
  let e = property_get(r4, "e");
  let overlay_close = property_get(r4, "overlay_close");
  let context = property_get(r4, "context");
  let stack = property_get(r4, "stack");
  let ast = property_get(r4, "ast");
  if (includes) {
    let choice_function_open = {
      shortcut: "o",
      text: "Open",
      fn: async function lambda() {
        overlay_close();
        app_a_function_on_keydown_remove(a);
        await app_a_function_select(context, name);
      },
    };
    list_add(choices, choice_function_open);
    let references = {
      shortcut: "s",
      text: "References",
      fn: async function lambda() {
        let result = await data_identifiers_search(name);
        let properties = properties_get(result);
        async function lambda3(f_name) {
          await app_a_function_select(context, f_name);
        }
        overlay_close();
        let r = app_a_functions_overlay_generic(a, properties, lambda3);
      },
    };
    list_add(choices, references);
  }
  let r2 = {
    includes,
    e,
    context,
    stack,
    ast,
  };
  return r2;
}
