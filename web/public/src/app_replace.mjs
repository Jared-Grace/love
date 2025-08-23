import { app_refresh } from "./app_refresh.mjs";
import { app_replace_screens } from "./app_replace_screens.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  marker("1");
  let app_fn = app_replace;
  let screens = app_replace_screens();
  app_refresh({
    app_fn,
    screens,
  });
}
