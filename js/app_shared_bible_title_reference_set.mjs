import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { app_shared_bible_reference_reading } from "./app_shared_bible_reference_reading.mjs";
import { html_title_initial_get } from "./html_title_initial_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_title_set } from "./html_title_set.mjs";
export async function app_shared_bible_title_reference_set(
  chapter_code,
  verse_numbers,
  ref_mode,
  ref_line,
) {
  "Names the browser tab after the passage being read, the reference first and the app's name after it, asked for by the human 2026-11-01 - so a row of tabs, or the list of a phone's open pages, says which passage each one holds, and a tab cut short still shows the part that tells them apart.";
  "A passage opened from a written reference is named the way it was written, since that already says which verses; a chapter is named in the language it is being read in, with any verses picked in it.";
  arguments_assert(arguments, 4);
  let reference = ref_line;
  if (not(ref_mode)) {
    reference = await app_shared_bible_reference_reading(
      chapter_code,
      verse_numbers,
    );
  }
  let name = html_title_initial_get();
  let title = text_combine_multiple([reference, " - ", name]);
  html_title_set(title);
}
