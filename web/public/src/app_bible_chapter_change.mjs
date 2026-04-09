import { app_bible_chapter_verse_open } from "../../../love/public/src/app_bible_chapter_verse_open.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_verses_browser } from "../../../love/public/src/ebible_verses_browser.mjs";
import { ebible_chapter_codes_browser } from "../../../love/public/src/ebible_chapter_codes_browser.mjs";
import { list_next_wrap } from "../../../love/public/src/list_next_wrap.mjs";
export async function app_bible_chapter_change(
  list_next_wrap,
  chapter_code,
  verse_number_get,
  context,
) {
  let list = await ebible_chapter_codes_browser(e);
  let next = list_next_wrap(list, chapter_code);
  let verses_next = await ebible_verses_browser(e, next);
  let mapped = list_map_property(verses_next, "verse_number");
  let verse_number_next = verse_number_get(mapped);
  app_bible_chapter_verse_open(context, next, verse_number_next);
}
