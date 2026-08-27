import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_shared_screen_tab_key_last } from "./app_shared_screen_tab_key_last.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export async function app_shared_screen_go_tab(context, key, value, screen) {
  "remember what this tab picked, then open the screen that shows it; kept per tab, so a second tab can be looking at something else";
  "the sibling that keeps the pick in local storage is on its way out: once every app has moved, it goes away and this one takes the plain name";
  storage_session_set_context(context, key, value);
  ("WHICH key was picked is written down as well as the value, because every pick a tab has ever made stays in storage: a screen the learner comes back to can read both the lesson they opened and the review they opened, and only the order tells it which of the two they were just looking at");
  let key_last = app_shared_screen_tab_key_last();
  storage_session_set_context(context, key_last, key);
  await app_shared_screen_set(context, screen);
}
