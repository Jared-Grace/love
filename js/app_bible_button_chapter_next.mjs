import { app_shared_button_arrow_next } from "../../love/js/app_shared_button_arrow_next.mjs";
import { app_bible_chapter_next } from "../../love/js/app_bible_chapter_next.mjs";
export function app_bible_button_chapter_next(bar, context, chapter_code) {
  async function chapter_next() {
    await app_bible_chapter_next(context, chapter_code);
  }
  app_shared_button_arrow_next(bar, "chapter", chapter_next);
}
