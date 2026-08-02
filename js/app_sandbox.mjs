import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { app_message } from "./app_message.mjs";
import { app_message_provide_travel } from "./app_message_provide_travel.mjs";
import { app_message_provide_food } from "./app_message_provide_food.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_sandbox_choose } from "./app_sandbox_choose.mjs";
import { html_reload_on_hash_change } from "./html_reload_on_hash_change.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
export async function app_sandbox(context) {
  let root = property_get(context, "root");
  html_reload_on_hash_change();
  html_clear(root);
  html_mobile_default(context);
  let name = html_hash_name_get();
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
