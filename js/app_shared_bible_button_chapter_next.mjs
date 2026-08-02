import { app_shared_button_arrow_right } from "./app_shared_button_arrow_right.mjs";
import { app_shared_bible_chapter_next } from "./app_shared_bible_chapter_next.mjs";
export function app_shared_bible_button_chapter_next(
  bar,
  context,
  chapter_code,
) {
  async function chapter_next() {
    await app_shared_bible_chapter_next(context, chapter_code);
  }
  app_shared_button_arrow_right(bar, chapter_next);
}
