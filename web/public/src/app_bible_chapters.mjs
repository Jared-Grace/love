import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_bible_chapters(context) {
  marker("1");
  let root = html_clear_context(context);
  let list = await ebible_chapter_codes(bible_folder);
}
