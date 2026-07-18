import { html_p_text } from "../../love/js/html_p_text.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { object_merge_set } from "../../love/js/object_merge_set.mjs";
import { app_shared_refresh } from "../../love/js/app_shared_refresh.mjs";
import { app_message } from "../../love/js/app_message.mjs";
import { app_message_provide_travel } from "../../love/js/app_message_provide_travel.mjs";
import { app_message_provide_food } from "../../love/js/app_message_provide_food.mjs";
import { html_clear } from "../../love/js/html_clear.mjs";
import { html_hash_get } from "../../love/js/html_hash_get.mjs";
import { text_skip } from "../../love/js/text_skip.mjs";
import { app_sandbox_choose } from "../../love/js/app_sandbox_choose.mjs";
import { html_reload_on_hash_change } from "../../love/js/html_reload_on_hash_change.mjs";
export async function app_sandbox(context) {
  let root = property_get(context, "root");
  html_reload_on_hash_change();
  html_clear(root);
  let name = text_skip(html_hash_get(), 1);
  app_sandbox_choose(root, name);
  return;
  let app_fn = app_message;
  object_merge_set(context, {
    app_fn,
    screens: {
      provide_travel: app_message_provide_travel,
      provide_food: app_message_provide_food,
    },
  });
  await app_shared_refresh(context);
}
