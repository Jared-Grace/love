import { app_replace_buttons_numbered } from "../../../love/public/src/app_replace_buttons_numbered.mjs";
import { text_get } from "../../../love/public/src/text_get.mjs";
import { app_replace_goals } from "../../../love/public/src/app_replace_goals.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { app_replace_settings } from "../../../love/public/src/app_replace_settings.mjs";
import { emoji_gear } from "../../../love/public/src/emoji_gear.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_home(context) {
  let root = property_get(context, "root");
  function lambda4() {
    app_shared_screen_set(context, app_replace_settings);
  }
  app_replace_button_wide(root, emoji_gear() + " Settings", lambda4);
  let rule_sets = app_replace_rule_sets();
  app_replace_buttons_numbered(root, rule_sets, text_get, on_click);
  function on_click(index) {
    storage_local_set_context(context, "rule_set_index", index);
    app_shared_screen_set(context, app_replace_goals);
  }
  function text_get(item) {
    let value = property_get(item, "name");
    return value;
  }
}
