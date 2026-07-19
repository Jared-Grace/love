import { g_verses_pool_download } from "./g_verses_pool_download.mjs";
import { g_verses_hs_warning_name } from "./g_verses_hs_warning_name.mjs";
import { list_iterator_shuffled_avoid_repeat } from "./list_iterator_shuffled_avoid_repeat.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
import { g_verse_hs_warning_next } from "./g_verse_hs_warning_next.mjs";
export async function g_verses_hs_warning_prepare() {
  "download the pre-resolved Holy-Spirit-warning verse pool in ONE request (the batched file uploaded by g_verses_hs_warning_upload), build a no-back-to-back-repeat iterator, and stash it on g_verse_hs_warning_next so the dove overlay can draw a fresh verse synchronously. runs once in the BACKGROUND at startup with the loading overlay SUPPRESSED; until it finishes (or if the batch file is missing) the overlay uses a fallback verse";
  async function lambda() {
    let name = g_verses_hs_warning_name();
    let verses = await g_verses_pool_download(name);
    let iterator = list_iterator_shuffled_avoid_repeat(verses, "reference");
    global_function_property_set(g_verse_hs_warning_next, "iterator", iterator);
  }
  await html_loading_suppressed(lambda);
}
