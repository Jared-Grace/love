import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_title_reference_set } from "./app_shared_bible_title_reference_set.mjs";
export async function app_bible_title_verse_set(v) {
  arguments_assert(arguments, 1);
  ("Names the tab after the verse on the one-verse screen, the same way the whole-chapter reader names it after its passage - the reference first, then the app.");
  ("It is handed what the screen answered rather than reading the address, because the screen answers with nothing on the ways out that stop early, and those draw no verse to name the tab after.");
  let nothing_drawn = null_is(v);
  if (nothing_drawn) {
    return;
  }
  let chapter_code = property_get(v, "chapter_code");
  let verse_number = property_get(v, "verse_number");
  await app_shared_bible_title_reference_set(
    chapter_code,
    [verse_number],
    false,
    "",
  );
}
