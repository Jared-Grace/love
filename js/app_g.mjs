import { app_g_game_initialize_if_absent } from "./app_g_game_initialize_if_absent.mjs";
import { app_g_tutorials_initialize } from "./app_g_tutorials_initialize.mjs";
import { app_g_html_initialize } from "./app_g_html_initialize.mjs";
import { app_a_indexeddb_initialize } from "./app_a_indexeddb_initialize.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { app_g_refresh } from "./app_g_refresh.mjs";
import { html_loading } from "./html_loading.mjs";
export async function app_g(context) {
  "wrap the whole startup in one loading screen so a reload shows immediate feedback and hides the intermediate flashes (white, partial map, second load)";
  await html_loading(async function () {
    await app_a_indexeddb_initialize();
    let books = await ebible_version_books_browser("engbsb");
    global_function_property_set(app_g, "books", books);
    global_function_property_set(app_g, "chapter_code", "JAS01");
    let div_map_container = app_g_html_initialize(context);
    app_g_tutorials_initialize();
    await app_g_game_initialize_if_absent();
    await app_g_refresh(context, div_map_container);
  });
}
