import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_next_wrap } from "../../../love/public/src/list_next_wrap.mjs";
import { app_bible_chapter_change } from "../../../love/public/src/app_bible_chapter_change.mjs";
export async function app_bible_chapter_next(context, chapter_code) {
  await app_bible_chapter_change(
    context,
    chapter_code,
    list_next_wrap,
    list_first,
  );
}
