import { html_button_arrow_left } from "../../../love/public/src/html_button_arrow_left.mjs";
import { app_bible_chapter_previous } from "../../../love/public/src/app_bible_chapter_previous.mjs";
export function app_bible_button_chapter_previous(context, chapter_code, bar) {
  async function chapter_previous() {
    await app_bible_chapter_previous(context, chapter_code);
  }
  html_button_arrow_left(bar, chapter_previous);
}
