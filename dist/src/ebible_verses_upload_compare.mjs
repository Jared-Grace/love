import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { json_equal_not } from "../../../love/public/src/json_equal_not.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { ebible_version_readaloud_download } from "../../../love/public/src/ebible_version_readaloud_download.mjs";
import { ebible_chapters_each_verses_check_with } from "../../../love/public/src/ebible_chapters_each_verses_check_with.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
export async function ebible_verses_upload_compare(bible_folder) {
  await ebible_version_download(bible_folder);
  await ebible_version_readaloud_download(bible_folder);
  ("loop through to ensure parse correct before begin upload");
  await ebible_chapters_each_verses_check_with(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses_readaloud) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    function lambda2(a, b) {
      function lambda(t) {
        let replaced = text_replace(t, "’ ”", "’”");
        return replaced;
      }
      let text = property_change(b, "text", lambda);
      let n = json_equal_not(a, b);
      if (n) {
        log({
          chapter_code,
          a,
          b,
        });
      }
    }
    each_pair(verses_readaloud, verses, lambda2);
    return;
  }
}
