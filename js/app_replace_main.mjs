import { app_shared_history_restore_listen } from "./app_shared_history_restore_listen.mjs";
import { app_shared_initialize } from "./app_shared_initialize.mjs";
import { app_replace_hash_restore } from "./app_replace_hash_restore.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_replace_after_refresh } from "./app_replace_after_refresh.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { app_replace_screens } from "./app_replace_screens.mjs";
import { app_replace } from "./app_replace.mjs";
export async function app_replace_main(context) {
  let screens = app_replace_screens();
  let app_fn = app_replace;
  app_shared_initialize(context, app_fn, screens);
  app_shared_history_restore_listen(context, app_replace_hash_restore);
  object_merge(context, {
    after_refresh: app_replace_after_refresh,
  });
  await app_shared_refresh(context);
}
