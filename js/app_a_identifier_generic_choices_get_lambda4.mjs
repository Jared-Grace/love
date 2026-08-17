import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_function_name_selected } from "./app_a_function_name_selected.mjs";
import { function_param_delete } from "./function_param_delete.mjs";
import { app_a_function_overlay_refresh } from "./app_a_function_overlay_refresh.mjs";
import { list_add } from "./list_add.mjs";
export function app_a_identifier_generic_choices_get_lambda4(
  context,
  name,
  a,
  o,
  choices,
) {
  arguments_assert(arguments, 5);
  let choice_param_delete = {
    shortcut: "q",
    text: "Param delete",
    fn: async function lambda() {
      let f_name = app_a_function_name_selected(context);
      await function_param_delete(f_name, name);
      await app_a_function_overlay_refresh(a, o);
    },
  };
  list_add(choices, choice_param_delete);
}
