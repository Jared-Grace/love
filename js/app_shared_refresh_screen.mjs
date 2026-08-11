import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { app_shared_screen_stored_set_context } from "./app_shared_screen_stored_set_context.mjs";
export async function app_shared_refresh_screen(context, without) {
  app_shared_screen_stored_set_context(context, without);
  await app_shared_refresh(context);
}
