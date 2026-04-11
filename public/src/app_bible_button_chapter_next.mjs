import { html_button_arrow_right } from "../../../love/public/src/html_button_arrow_right.mjs";
import { app_bible_chapter_next } from "../../../love/public/src/app_bible_chapter_next.mjs";
export function app_bible_button_chapter_next(context, chapter_code, bar) {
  async function chapter_next() {
    await app_bible_chapter_next(context, chapter_code);
  }
  html_button_arrow_right(bar, chapter_next);
}
