import { app_shared_button_arrow_left } from "../../love/js/app_shared_button_arrow_left.mjs";
import { app_bible_chapter_previous } from "../../love/js/app_bible_chapter_previous.mjs";
export function app_bible_button_chapter_previous(bar, context, chapter_code) {
  ("bare arrow keeps the cramped top bar narrow; the book and chapter buttons between the arrows signal chapter nav");
  async function chapter_previous() {
    await app_bible_chapter_previous(context, chapter_code);
  }
  app_shared_button_arrow_left(bar, chapter_previous);
}
