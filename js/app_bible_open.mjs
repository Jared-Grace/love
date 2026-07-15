import { window_open_app } from "./window_open_app.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_bible_open(chapter_code, verse_number) {
  window_open_app(fn_name("app_bible"), {
    c: chapter_code,
    v: verse_number,
  });
}
