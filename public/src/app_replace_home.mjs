import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { app_replace_settings } from "../../../love/public/src/app_replace_settings.mjs";
import { emoji_gear } from "../../../love/public/src/emoji_gear.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_home(context) {
  let root = property_get(context, "root");
  function lambda4() {
    app_shared_screen_set(context, app_replace_settings);
  }
  app_replace_button_wide(root, emoji_gear() + " Settings", lambda4);
  let rule_sets = app_replace_rule_sets();
  function lambda2(item, index) {
    let name = property_get(item, "name");
    let a = add_1(index);
    const text = a + " " + name;
    let b = app_replace_button_wide(root, text, lambda);
    html_style_assign(b, {
      display: "grid",
      "grid-template-columns": "auto 1fr auto",
      "align-items": "center",
    });
    html_style_assign(b3, {
      "justify-self": "start",
      "margin-left": "10px",
    });
    html_style_assign(b4, {
    "grid-column": "1 / -1",
    "text-align": "center"
  });
    function lambda() {
      storage_local_set_context(context, "rule_set_index", index);
      app_shared_screen_set(context, app_replace_rule_set);
    }
  }
  each_index(rule_sets, lambda2);
}
