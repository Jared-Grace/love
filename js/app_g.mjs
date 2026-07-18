import { app_g_game_initialize_if_absent } from "./app_g_game_initialize_if_absent.mjs";
import { app_g_tutorials_initialize } from "./app_g_tutorials_initialize.mjs";
import { app_g_html_initialize } from "./app_g_html_initialize.mjs";
import { app_a_indexeddb_initialize } from "./app_a_indexeddb_initialize.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { app_g_refresh } from "./app_g_refresh.mjs";
import { html_loading } from "./html_loading.mjs";
import { html_reload_on_hash_change } from "./html_reload_on_hash_change.mjs";
export async function app_g(context) {
  async function lambda() {
    await app_a_indexeddb_initialize();
    let books = await ebible_version_books_browser("engbsb");
    global_function_property_set(app_g, "books", books);
    global_function_property_set(app_g, "chapter_code", "JAS01");
    let div_map_container = app_g_html_initialize(context);
    app_g_tutorials_initialize();
    await app_g_game_initialize_if_absent();
    await app_g_refresh(context, div_map_container);
  }
  await html_loading(lambda);
  html_reload_on_hash_change();
}
