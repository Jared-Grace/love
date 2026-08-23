import { app_shared_hash_index_settings } from "./app_shared_hash_index_settings.mjs";
import { properties_get } from "./properties_get.mjs";
import { app_shared_dev_overlay } from "./app_shared_dev_overlay.mjs";
import { app_shared_hash_index_prefixes_derived } from "./app_shared_hash_index_prefixes_derived.mjs";
import { app_shared_hash_index_render } from "./app_shared_hash_index_render.mjs";
import { app_sandbox_storage_app } from "./app_sandbox_storage_app.mjs";
export function app_sandbox_previews_list(previews) {
  "no hash matched a preview: show the previews as the SAME directory the game's dev routes are shown as, so picking one is picking from a drill-down of cards rather than from a stack of bare links";
  "it was a stack of bare links until now, and the two pages are the same page: a registry keyed by the word after the hash, and a list to pick from when the address names none. One of them had been improved and the other had not, which is the only thing that made them look different.";
  "the folders come from the names themselves and nothing was typed to get them - song_image_choose and song_image_audit file themselves under song, and the two dream traces under dream. A preview registered later is filed the same way, by being named the same way, so there is no list here to keep up to date.";
  "the page's own root is passed nowhere: the overlay draws itself over the whole viewport, which is what makes the pick screen look like a screen rather than like text at the top of an empty page.";
  let names = properties_get(previews);
  let prefixes = app_shared_hash_index_prefixes_derived(names);
  let div = app_shared_dev_overlay("Sandbox previews");
  let app_fn = app_sandbox_storage_app();
  ("picking a preview opens it in a NEW TAB, and that is where this directory parts company with the game's. A preview is one of a list somebody is working through - comparing two, or watching one while reading the code that draws it - so the list has to survive being used. Going there in this tab spends the list to see one preview and then asks for the way back to it.");
  let new_tab = true;
  let settings = app_shared_hash_index_settings(app_fn, new_tab);
  app_shared_hash_index_render(div, names, prefixes, settings);
}
