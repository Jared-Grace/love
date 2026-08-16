import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_verse_previous } from "./app_shared_bible_verse_previous.mjs";
import { app_shared_bible_verse_next } from "./app_shared_bible_verse_next.mjs";
import { app_shared_arrows_wide_unit } from "./app_shared_arrows_wide_unit.mjs";
export function app_shared_bible_verse_arrows(
  context,
  chapter_code,
  verse_current,
  content,
) {
  arguments_assert(arguments, 4);
  async function lambda() {
    await app_shared_bible_verse_previous(context, chapter_code, verse_current);
  }
  async function lambda7() {
    await app_shared_bible_verse_next(context, chapter_code, verse_current);
  }
  app_shared_arrows_wide_unit(content, "verse", lambda, lambda7);
}
