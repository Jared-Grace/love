import { arguments_assert } from "./arguments_assert.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_overlay_container_centered } from "./app_a_overlay_container_centered.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_a_identifier_generic_choices_get_lambda15 } from "./app_a_identifier_generic_choices_get_lambda15.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { html_on_enter_lambda } from "./html_on_enter_lambda.mjs";
import { app_a_overlay_keydown } from "./app_a_overlay_keydown.mjs";
import { app_a_input_integer } from "./app_a_input_integer.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_select } from "./html_select.mjs";
import { app_a_identifier_generic_choices_get_lambda23 } from "./app_a_identifier_generic_choices_get_lambda23.mjs";
import { app_a_button_wide } from "./app_a_button_wide.mjs";
import { clipboard_paste } from "./clipboard_paste.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
import { app_a_functionize_choices_add } from "./app_a_functionize_choices_add.mjs";
import { functions_names } from "./functions_names.mjs";
export async function app_a_identifier_generic_choices_get_f_names(
  stack,
  o,
  name,
  a,
  lines_multiple,
  c,
  choices,
  replace,
) {
  arguments_assert(arguments, 8);
  let e = list_get_end_2(stack);
  let overlay_close = property_get(o, "overlay_close");
  let overlay = property_get(o, "overlay");
  let oc = app_a_overlay_container_centered(overlay);
  html_div_text(oc, name);
  let context = property_get(a, "context");
  let change = {
    fn: async function lambda15() {
      let r3 = await app_a_identifier_generic_choices_get_lambda15(
        o,
        a,
        change,
        name,
        lines_multiple,
      );
      return r3;
    },
  };
  object_merge_set(change, c);
  list_add_multiple(choices, [
    {
      shortcut: "c",
      text: html_button_copy_text(),
      fn: async function lambda2() {
        await clipboard_copy(name);
        overlay_close();
      },
    },
    change,
    {
      shortcut: "d",
      text: "Delete",
      fn: async function lambda2() {
        let lambda = html_on_enter_lambda(lambda23);
        overlay_close();
        let o2 = app_a_overlay_keydown(a, lambda);
        let overlay_delete = property_get(o2, "overlay");
        let oc_delete = app_a_overlay_container_centered(overlay_delete);
        html_div_text(oc_delete, "How many statements do you want to delete?");
        let input = app_a_input_integer(overlay_delete);
        html_centered(input);
        html_value_set(input, 1);
        await html_select(input);
        async function lambda23() {
          let r4 = await app_a_identifier_generic_choices_get_lambda23(
            input,
            a,
            o2,
          );
          return r4;
        }
        app_a_button_wide(overlay_delete, "Delete", lambda23);
      },
    },
    {
      shortcut: "v",
      text: "Paste replace",
      fn: async function lambda2() {
        let name_new = await clipboard_paste();
        text_is_assert_json(name_new, {
          hint: "the pasted replacement should be text — is there text on the clipboard to paste?",
          name,
          name_new,
        });
        replace(name_new);
        await app_a_function_on_change(a, o);
      },
    },
  ]);
  app_a_functionize_choices_add(choices, a, o);
  let f_names = await functions_names();
  let r = {
    e,
    overlay_close,
    context,
    f_names,
  };
  return r;
}
