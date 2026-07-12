import { app_code_screens } from "./app_code_screens.mjs";
import { app_shared_initialize_refresh } from "./app_shared_initialize_refresh.mjs";
export async function app_code(context) {
  let app_fn = app_code;
  let screens = app_code_screens();
  await app_shared_initialize_refresh(context, app_fn, screens);
}
