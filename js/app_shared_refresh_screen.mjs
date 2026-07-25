import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { app_shared_screen_stored_set } from "./app_shared_screen_stored_set.mjs";
export async function app_shared_refresh_screen(context, without) {
  app_shared_screen_stored_set(context, without);
  await app_shared_refresh(context);
}
