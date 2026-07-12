import { app_replace_button_arrow_left } from "./app_replace_button_arrow_left.mjs";
import { app_bible_chapter_previous } from "./app_bible_chapter_previous.mjs";
export function app_bible_button_chapter_previous(bar, context, chapter_code) {
  async function chapter_previous() {
    await app_bible_chapter_previous(context, chapter_code);
  }
  app_replace_button_arrow_left(bar, chapter_previous);
}
