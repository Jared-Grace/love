import { app_g_refresh } from "./app_g_refresh.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { app_g_game_initialize_if_absent } from "./app_g_game_initialize_if_absent.mjs";
import { app_g_tutorials_initialize } from "./app_g_tutorials_initialize.mjs";
import { app_g_html_initialize } from "./app_g_html_initialize.mjs";
import { browser_files_database_initialize } from "./browser_files_database_initialize.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { html_loading } from "./html_loading.mjs";
import { html_reload_on_hash_change } from "./html_reload_on_hash_change.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { g_verses_waiting_prepare } from "./g_verses_waiting_prepare.mjs";
import { g_verses_hs_warning_prepare } from "./g_verses_hs_warning_prepare.mjs";
export async function app_g(context) {
  async function lambda() {
    await browser_files_database_initialize();
    let bible_folder = ebible_folder_english();
    let books = await ebible_version_books_browser(bible_folder);
    global_function_property_set(app_g, "books", books);
    global_function_property_set(app_g, "chapter_code", "JAS01");
    let div_map_container = app_g_html_initialize(context);
    app_g_tutorials_initialize();
    await app_g_game_initialize_if_absent();
    await app_g_refresh(context, div_map_container);
  }
  ("listen for the hash BEFORE the game boots, not after. the listener needs nothing the boot produces - it only reloads - and the boot re-reads the hash from a clean page anyway. registered after, one throw anywhere in that boot skipped it, and the loading wrapper rethrows (it wraps the boot in a finally, not a catch), so the map could already be drawn and clickable while every hash navigation was quietly dead: tapping your own character opened the menu, pressing dev tools wrote the hash, and nothing reloaded, so the dev directory never arrived and there was nothing on screen to say why. moving it first makes the one recovery that always works - a reload - the thing a broken boot cannot take away");
  html_reload_on_hash_change();
  await html_loading(lambda);
  await catch_null_async(g_verses_waiting_prepare);
  await catch_null_async(g_verses_hs_warning_prepare);
}
