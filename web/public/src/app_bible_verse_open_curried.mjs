import { app_bible_verse_open } from "../../../love/public/src/app_bible_verse_open.mjs";
export function app_bible_verse_open_curried(context) {
  return function app_bible_verse_open_curried_result(verse_number) {
    return app_bible_verse_open(context, verse_number);
  };
}
