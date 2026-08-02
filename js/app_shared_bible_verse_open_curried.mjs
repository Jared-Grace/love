import { app_shared_bible_verse_open } from "./app_shared_bible_verse_open.mjs";
export function app_shared_bible_verse_open_curried(context) {
  let r2 = async function app_bible_verse_open_curried_result(verse_number) {
    let r = await app_shared_bible_verse_open(context, verse_number);
    return r;
  };
  return r2;
}
