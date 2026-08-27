import { ebible_bible_folder_commercial_assert } from "./ebible_bible_folder_commercial_assert.mjs";
import { bible_verses_marked_is } from "./bible_verses_marked_is.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
import { ebible_version_readaloud_download } from "./ebible_version_readaloud_download.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_firebase_upload_verse } from "./ebible_firebase_upload_verse.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
export async function ebible_verses_upload(bible_folder) {
  "Every verse of one bible published one at a time, whichever of the three places the bible came from.";
  "A bible whose text arrives already marked is walked from the chapters read out of those marks, rather than downloaded twice and checked against itself. The checking below exists because the archive says where a verse begins in two places that can disagree; usfm says it in one, so there is nothing there to check.";
  "Which bibles those are is one question asked next door rather than a catalogue named here, because this road wants to know whether the words came marked and not who published them.";
  "This road and the chapter road it shares a source with must branch together. Both put words into storage under the same folder name, so one of them left on the archive would publish a different printing of the same bible from the door beside it, and nothing would report the disagreement - a reader would get whichever door ran last.";
  await ebible_bible_folder_commercial_assert(bible_folder);
  let already = bible_verses_marked_is(bible_folder);
  if (already) {
    let chapters = await ebible_version_chapters_cache(bible_folder);
    await each_async(chapters, marked);
    return;
  }
  await ebible_version_download(bible_folder);
  await ebible_version_readaloud_download(bible_folder);
  ("loop through to ensure parse correct before begin upload");
  await ebible_chapters_each_verses_check_with(bible_folder, each_chapter);
  async function marked(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let verses = property_get(chapter, "verses");
    await each_chapter(chapter_code, verses);
  }
  async function each_chapter(chapter_code, verses) {
    async function lambda(v) {
      async function lambda3() {
        await ebible_firebase_upload_verse(v, chapter_code, bible_folder);
      }
      await retry_standard(lambda3);
    }
    await each_unordered_async(verses, lambda);
  }
}
