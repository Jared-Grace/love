import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_previous_wrap } from "../../../love/public/src/list_previous_wrap.mjs";
import { app_bible_chapter_change } from "../../../love/public/src/app_bible_chapter_change.mjs";
export async function app_bible_chapter_previous(context, chapter_code) {
  await app_bible_chapter_change(
    context,
    chapter_code,
    list_previous_wrap,
    list_last,
  );
}
