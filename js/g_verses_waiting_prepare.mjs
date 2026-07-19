import { g_verses_pool_download } from "./g_verses_pool_download.mjs";
import { g_verses_waiting_name } from "./g_verses_waiting_name.mjs";
import { list_iterator_shuffled_avoid_repeat } from "./list_iterator_shuffled_avoid_repeat.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
import { g_verse_waiting_next } from "./g_verse_waiting_next.mjs";
export async function g_verses_waiting_prepare() {
  "download the pre-resolved waiting-on-the-Lord verse pool in ONE request (the batched file uploaded by g_verses_waiting_upload), build a no-back-to-back-repeat iterator, and stash it on g_verse_waiting_next so the prayer overlay can draw a fresh verse synchronously. runs once in the BACKGROUND at startup with the loading overlay SUPPRESSED — until it finishes (or if the batch file is missing), the overlay uses a fallback verse";
  async function lambda() {
    let name = g_verses_waiting_name();
    let verses = await g_verses_pool_download(name);
    let iterator = list_iterator_shuffled_avoid_repeat(verses, "reference");
    global_function_property_set(g_verse_waiting_next, "iterator", iterator);
  }
  await html_loading_suppressed(lambda);
}
