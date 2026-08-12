import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { app_g_dev_pill } from "./app_g_dev_pill.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
import { window_reload } from "./window_reload.mjs";
export function app_g_dev_links() {
  "the pills that sit over every dev route: back to the routes directory, and load this same screen again";
  "refresh is here rather than only in the player menu because this is where it is wanted most and costs least - one tap from the screen you are testing, with no menu to open first, and it keeps the route you are on because reloading asks for the address already in the bar";
  "the browser's own reload is the thing it stands in for. on a phone that lives behind the bar a full-height page is hiding, so on the very screen most worth reloading it is the hardest thing to reach";
  function routes() {
    html_hash_name_reload("index");
  }
  app_g_dev_pill("← routes", "#index", routes, "0.5rem");
  let here = html_hash_get();
  app_g_dev_pill("⟳ refresh", here, window_reload, "7.5rem");
}
