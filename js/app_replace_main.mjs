import { app_shared_initialize_refresh } from "./app_shared_initialize_refresh.mjs";
import { app_replace_screens } from "./app_replace_screens.mjs";
import { app_replace } from "./app_replace.mjs";
export async function app_replace_main(context) {
  let screens = app_replace_screens();
  let app_fn = app_replace;
  await app_shared_initialize_refresh(context, app_fn, screens);
}
