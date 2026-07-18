import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export async function app_shared_screen_go(context, key, value, screen) {
  storage_local_set_context(context, key, value);
  await app_shared_screen_set(context, screen);
}
