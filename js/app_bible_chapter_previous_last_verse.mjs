import { list_last } from "./list_last.mjs";
import { list_previous_wrap } from "./list_previous_wrap.mjs";
import { app_bible_chapter_change } from "./app_bible_chapter_change.mjs";
export async function app_bible_chapter_previous_last_verse(
  context,
  chapter_code,
) {
  ("stepping backward one verse from a chapter's first verse lands on the previous chapter's last verse");
  await app_bible_chapter_change(
    context,
    chapter_code,
    list_previous_wrap,
    list_last,
  );
}
