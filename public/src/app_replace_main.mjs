import { app_shared_initialize_refresh } from "../../../love/public/src/app_shared_initialize_refresh.mjs";
import { app_replace_screens } from "../../../love/public/src/app_replace_screens.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
export async function app_replace_main(context) {
  let app_fn = app_replace;
  let screens = app_replace_screens();
  await app_shared_initialize_refresh(context, app_fn, screens);
}
