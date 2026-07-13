import { html_clear_context } from "./html_clear_context.mjs";
import { html_bar_content_padded } from "./html_bar_content_padded.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { app_supper_versions } from "./app_supper_versions.mjs";
import { emoji_gear } from "./emoji_gear.mjs";
import { app_supper_versions_chosen_get } from "./app_supper_versions_chosen_get.mjs";
import { app_supper_verses_render } from "./app_supper_verses_render.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_supper_home_generic(context) {
  let root = html_clear_context(context);
  let bc = html_bar_content_padded(root);
  let content = property_get(bc, "content");
  let bar = property_get(bc, "bar");
  app_shared_screen_set_button(bar, context, app_supper_versions, emoji_gear());
  let versions_chosen = app_supper_versions_chosen_get(context);
  let folders = list_map_property(versions_chosen, "bible_folder");
  let empty = list_empty_is(folders);
  if (empty) {
    return;
  }
  await app_supper_verses_render(content, folders);
}
