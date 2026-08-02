import { list_first } from "./list_first.mjs";
import { list_next_wrap } from "./list_next_wrap.mjs";
import { app_shared_bible_chapter_change } from "./app_shared_bible_chapter_change.mjs";
export async function app_bible_chapter_next(context, chapter_code) {
  await app_shared_bible_chapter_change(
    context,
    chapter_code,
    list_next_wrap,
    list_first,
  );
}
