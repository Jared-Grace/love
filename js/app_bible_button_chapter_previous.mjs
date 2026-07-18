import { app_shared_button_arrow_previous } from "../../love/js/app_shared_button_arrow_previous.mjs";
import { app_bible_chapter_previous } from "../../love/js/app_bible_chapter_previous.mjs";
export function app_bible_button_chapter_previous(bar, context, chapter_code) {
  async function chapter_previous() {
    await app_bible_chapter_previous(context, chapter_code);
  }
  app_shared_button_arrow_previous(bar, "chapter", chapter_previous);
}
