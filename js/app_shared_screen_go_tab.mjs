import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export async function app_shared_screen_go_tab(context, key, value, screen) {
  "remember which lesson or review this tab picked, then open its screen; per tab, so a second tab can study something else";
  storage_session_set_context(context, key, value);
  await app_shared_screen_set(context, screen);
}
