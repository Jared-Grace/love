import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_toggle } from "./list_toggle.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { not } from "./not.mjs";
import { app_supper_choices } from "./app_supper_choices.mjs";
import { app_supper_folders_chosen } from "./app_supper_folders_chosen.mjs";
import { app_supper_folders_chosen_set } from "./app_supper_folders_chosen_set.mjs";
import { app_supper_buttons_folders } from "./app_supper_buttons_folders.mjs";
import { app_supper_verses_render } from "./app_supper_verses_render.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
import { html_bar_content_padding } from "./html_bar_content_padding.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
export async function app_supper_main_generic(folder_gets, context) {
  let default_folders = invoke_multiple(folder_gets);
  let root = html_mobile_default(context);
  html_bar_content_padding(root);
  let folders_chosen = app_supper_folders_chosen(default_folders);
  let choices = await app_supper_choices();
  let picker = html_div(root);
  let content = html_div(root);
  async function render() {
    html_clear(picker);
    html_clear(content);
    app_supper_buttons_folders(picker, folders_chosen, choices, on_toggle);
    await app_supper_verses_render(content, folders_chosen);
  }
  async function on_toggle(bible_folder) {
    let chosen = list_includes(folders_chosen, bible_folder);
    let last = chosen && not(list_multiple_is(folders_chosen));
    if (last) {
      return;
    }
    list_toggle(folders_chosen, bible_folder);
    app_supper_folders_chosen_set(folders_chosen);
    await render();
  }
  await render();
}
