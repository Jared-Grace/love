import { app_refresh } from "./app_refresh.mjs";
import { app_replace_screens } from "./app_replace_screens.mjs";
import { app_replace } from "./app_replace.mjs";
export function app_replace_refresh() {
  let app_fn = app_replace;
  let screens = app_replace_screens();
  app_refresh(app_fn, screens);
}
