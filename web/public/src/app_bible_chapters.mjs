import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_bible_chapters(context) {
  marker("1");
  let root = html_clear_context(context);
  let e = ebible_folder_english();
  let list = await ebible_chapter_codes(e);
}
