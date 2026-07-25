import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export async function app_shared_screen_go_tab(context, key, value, screen) {
  "remember what this tab picked, then open the screen that shows it; kept per tab, so a second tab can be looking at something else";
  "the sibling that keeps the pick in local storage is on its way out: once every app has moved, it goes away and this one takes the plain name";
  storage_session_set_context(context, key, value);
  await app_shared_screen_set(context, screen);
}
