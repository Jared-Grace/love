import { app_bible_chapter_open } from "../../../love/public/src/app_bible_chapter_open.mjs";
export function app_bible_chapter_open_curried_2(hash) {
  return function app_bible_chapter_open_curried_2_result(
    context,
    chapter_code,
  ) {
    return app_bible_chapter_open(hash, context, chapter_code);
  };
}
