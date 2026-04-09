import { ebible_verses_browser } from "../../../love/public/src/ebible_verses_browser.mjs";
import { app_bible_verse_open } from "../../../love/public/src/app_bible_verse_open.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
export async function app_bible_verse_change(
  verse_get,
  verse_current,
  chapter_change,
  context,
  chapter_code,
) {
  let verses = await ebible_verses_browser(e, chapter_code);
  let next = verse_get(verses, verse_current);
  let ni = null_is(next);
  if (ni) {
    await chapter_change(context, chapter_code);
  } else {
    let verse_number = property_get(next, "verse_number");
    app_bible_verse_open(context, verse_number);
  }
}
