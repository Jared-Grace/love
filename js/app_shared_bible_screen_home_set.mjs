import { app_shared_bible_screen_home_set_write } from "./app_shared_bible_screen_home_set_write.mjs";
import { noop } from "./noop.mjs";
export async function app_shared_bible_screen_home_set(context) {
  "go back to the reader this app calls home. every bible-family app hands its own home screen to the context as it starts, so a screen shared between those apps has to ask the context which one it is. naming one app's home directly stores that name in a tab belonging to an app that never registered it, and every later load in that tab then finds no screen to draw and comes up blank";
  await app_shared_bible_screen_home_set_write(context, noop);
}
