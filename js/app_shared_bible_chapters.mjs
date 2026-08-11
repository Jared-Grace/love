import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_chapters_before } from "./app_shared_bible_chapters_before.mjs";
import { app_shared_bible_chapter_open_curried } from "./app_shared_bible_chapter_open_curried.mjs";
import { app_shared_bible_chapters_render } from "./app_shared_bible_chapters_render.mjs";
export async function app_shared_bible_chapters(context) {
  let r = await app_shared_bible_chapters_before(context);
  let card = property_get(r, "card");
  let book_code = property_get(r, "book_code");
  let e = ebible_folder_english();
  let oc = app_shared_bible_chapter_open_curried(context);
  let current = property_get(r, "chapter_code");
  await app_shared_bible_chapters_render(card, e, book_code, oc, current);
}
