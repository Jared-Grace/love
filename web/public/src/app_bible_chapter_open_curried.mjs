import { app_bible_chapter_open } from "../../../love/public/src/app_bible_chapter_open.mjs";
export function app_bible_chapter_open_curried(context) {
  let r2 = function app_bible_chapter_open_curried_2_result(chapter_code) {
    let r = app_bible_chapter_open(context, chapter_code);
    return r;
  };
  return r2;
}
