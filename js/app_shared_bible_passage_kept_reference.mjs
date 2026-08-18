import { app_shared_bible_passage_kept_get } from "./app_shared_bible_passage_kept_get.mjs";
import { app_shared_bible_reference_reading } from "./app_shared_bible_reference_reading.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_shared_bible_passage_kept_reference(context) {
  "What to call the passage this tab was last reading - a name a way out can wear.";
  "Nothing at all when the tab has read nothing yet, which a caller shows as a plain Back. It is an ordinary answer rather than a fault: somebody who opened straight onto a menu has no reading to be sent back to, and a button that named one would be naming a place they have never been.";
  arguments_assert(arguments, 1);
  let kept = app_shared_bible_passage_kept_get(context);
  let nothing = null_is(kept);
  if (nothing) {
    let r = "";
    return r;
  }
  let chapter_code = property_get(kept, "chapter_code");
  let verse_numbers = property_get(kept, "verse_numbers");
  let reference = await app_shared_bible_reference_reading(
    chapter_code,
    verse_numbers,
  );
  return reference;
}
