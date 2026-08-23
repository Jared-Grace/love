import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { window_reload } from "./window_reload.mjs";
import { app_shared_g_dev_index_hash_name } from "./app_shared_g_dev_index_hash_name.mjs";
import { app_g_dev_pill } from "./app_g_dev_pill.mjs";

export function app_g_bless_dev_links() {
  arguments_assert(arguments, 0);
  ("The two pills over every dev screen in the praying game: back to the directory, and load");
  ("this same screen again.");
  ("Refresh earns its place here more than anywhere else in this game, because every load");
  ("makes a NEW world. A screen reporting on the crowd is a reading of one street, and one");
  ("reading is not a measurement - what you want is the same screen again on a fresh world,");
  ("four or five times, which is one tap from here and is otherwise the browser's own reload");
  ("button hiding behind a bar on a phone.");
  ("Reloading asks for the address already in the bar, so it keeps the screen you are on");
  ("rather than dropping you back onto the street.");
  let routes_hash = "#index";
  function routes() {
    html_hash_name_reload(app_shared_g_dev_index_hash_name());
  }
  app_g_dev_pill("← routes", routes_hash, routes, "0.5rem");
  let here = html_hash_get();
  app_g_dev_pill("⟳ refresh", here, window_reload, "7.5rem");
}
