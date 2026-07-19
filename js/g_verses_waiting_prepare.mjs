import { g_verses_waiting_on_the_lord } from "./g_verses_waiting_on_the_lord.mjs";
import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_iterator_shuffled_avoid_repeat } from "./list_iterator_shuffled_avoid_repeat.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
import { g_verse_waiting_next } from "./g_verse_waiting_next.mjs";
export async function g_verses_waiting_prepare() {
  "resolve the waiting-on-the-Lord reference pool into full verses (text + reference) via the shared ebible resolver, build a no-back-to-back-repeat iterator, and stash it on g_verse_waiting_next so the prayer overlay can draw a fresh verse synchronously. runs once in the BACKGROUND at startup with the loading overlay SUPPRESSED (the downloads must not hijack the loader) — until it finishes, the overlay uses a fallback verse; unresolvable references are silently dropped by the resolver, so the null-filter keeps the pool clean";
  async function lambda() {
    let references = g_verses_waiting_on_the_lord();
    let folder = ebible_folder_english();
    let folders = [folder];
    let resolved = await ebible_references_parse_lines_browser(folders, references);
    let verses = list_filter_null_not_is(resolved);
    let iterator = list_iterator_shuffled_avoid_repeat(verses, "reference");
    global_function_property_set(g_verse_waiting_next, "iterator", iterator);
  }
  await html_loading_suppressed(lambda);
}
