import { app_shared_bible_chapter_open } from "./app_shared_bible_chapter_open.mjs";
export function app_shared_bible_chapter_open_curried(context) {
  let r2 = async function app_bible_chapter_open_curried_2_result(
    chapter_code,
  ) {
    let r = await app_shared_bible_chapter_open(context, chapter_code);
    return r;
  };
  return r2;
}
