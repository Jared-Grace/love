import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_overlay_keydown } from "./app_a_overlay_keydown.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_choice_close } from "./app_a_choice_close.mjs";
import { app_a_on_keydown } from "./app_a_on_keydown.mjs";
import { app_a_overlay_container } from "./app_a_overlay_container.mjs";
import { app_a_function_import } from "./app_a_function_import.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
import { app_a_buttons_shortcuts } from "./app_a_buttons_shortcuts.mjs";
import { html_loading } from "./html_loading.mjs";
export async function app_a_function_lambda3(
  content,
  app_a_function_on_keydown,
  context,
  f_name,
) {
  arguments_assert(arguments, 4);
  async function lambda5() {
    let o = app_a_overlay_keydown(
      {
        root: content,
        app_a_function_on_keydown,
        context,
      },
      on_keydown,
    );
    let overlay_close = property_get(o, "overlay_close");
    let overlay = property_get(o, "overlay");
    let v = app_a_choice_close(overlay_close);
    let choices_overlay = [v];
    function on_keydown(e) {
      app_a_on_keydown(e, choices_overlay);
    }
    let div = app_a_overlay_container(overlay);
    let fn = await app_a_function_import(f_name);
    let r = await fn();
    let j = json_format_to(r);
    html_pre_text(div, j);
    app_a_buttons_shortcuts(overlay, choices_overlay);
  }
  await html_loading(lambda5);
}
