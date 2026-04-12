import { app_g_game_initialize } from "../../../love/public/src/app_g_game_initialize.mjs";
import { app_g_html_initialize } from "../../../love/public/src/app_g_html_initialize.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { ebible_version_books_browser } from "../../../love/public/src/ebible_version_books_browser.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
export async function app_g_main(context) {
  await app_a_indexeddb_initialize();
  let books = await ebible_version_books_browser("engbsb");
  global_function_property_set(app_g_main, "books", books);
  global_function_property_set(app_g_main, "chapter_code", "JAS01");
  let div_map_container = app_g_html_initialize(context);
  let rows = await app_g_game_initialize();
  await app_g_refresh(context, div_map_container, rows);
}
