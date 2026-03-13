import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { ebible_verse_download } from "../../../love/public/src/ebible_verse_download.mjs";
export async function ebible_verse_browser(
  bible_folder,
  chapter_code,
  verse_number,
) {
  let verse_get = global_function_initialize(
    ebible_verse_browser,
    ebible_verse_download,
  );
  let verse = await verse_get(bible_folder, chapter_code, verse_number);
  return verse;
}
