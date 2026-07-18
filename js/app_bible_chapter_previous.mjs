import { list_first } from "./list_first.mjs";
import { list_previous_wrap } from "./list_previous_wrap.mjs";
import { app_bible_chapter_change } from "./app_bible_chapter_change.mjs";
export async function app_bible_chapter_previous(context, chapter_code) {
  ("the previous-chapter button opens the previous chapter at its first verse, matching the next-chapter button");
  await app_bible_chapter_change(
    context,
    chapter_code,
    list_previous_wrap,
    list_first,
  );
}
