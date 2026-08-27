import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { path_join } from "./path_join.mjs";
import { bible_audio_chapter_verses_stale } from "./bible_audio_chapter_verses_stale.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function bible_audio_verses_stale_report() {
  "Every verse anywhere on this disk that was read aloud from words its translation has since changed, gathered across every recording without being told where to look.";
  "★ IT ANSWERS THE ONE QUESTION A NEW EDITION RAISES, WHICH IS NOT WHETHER TO RE-RECORD BUT WHAT TO RE-RECORD. A revision lands and the honest instinct is to stop everything, because nobody can say which of five thousand files it touched. This says which, by name, and the answer is expected to be a short list - so recording continues on everything the revision left alone.";
  "★ IT FINDS ITS OWN SET, SO IT CANNOT BE RUN AGAINST A STALE LIST OF CHAPTERS. Handed a list, it would go on reporting about chapters that had been re-recorded and stay silent about ones recorded since the list was made, and both mistakes look exactly like a clean answer.";
  "★ A CHAPTER IT CANNOT READ IS COUNTED AND NAMED RATHER THAN SKIPPED. A folder of sound whose translation is not on this disk, or one cut before the pieces held whole verses, is not evidence of nothing wrong - it is evidence of a question that was never asked, and the two must not be added together.";
  arguments_assert(arguments, 0);
  let root = bible_audio_root_folder();
  let bible_folders = await folder_read(root);
  let chapters_stale = [];
  let chapters_unreadable = [];
  let chapters_uncomparable = [];
  let chapters_clean = 0;
  let verses_stale = 0;
  async function bible_each(bible_folder) {
    let folder = path_join([root, bible_folder]);
    let chapter_codes = await folder_read(folder);
    async function chapter_each(chapter_code) {
      async function lambda() {
        let r = await bible_audio_chapter_verses_stale(
          bible_folder,
          chapter_code,
        );
        return r;
      }
      let chapter_report = await catch_null_async(lambda);
      let missing = equal(chapter_report, null);
      if (missing) {
        list_add(chapters_unreadable, {
          bible_folder,
          chapter_code,
        });
        return;
      }
      let comparable = property_get(chapter_report, "comparable");
      if (not(comparable)) {
        let reason = property_get(chapter_report, "reason");
        list_add(chapters_uncomparable, {
          bible_folder,
          chapter_code,
          reason,
        });
        return;
      }
      let stale = property_get(chapter_report, "stale");
      let count = stale.length;
      if (equal(count, 0)) {
        chapters_clean = add(chapters_clean, 1);
        return;
      }
      verses_stale = add(verses_stale, count);
      list_add(chapters_stale, {
        bible_folder,
        chapter_code,
        verses: count,
        stale,
      });
    }
    await list_map_async(chapter_codes, chapter_each);
  }
  await list_map_async(bible_folders, bible_each);
  let report = {
    verses_stale,
    chapters_stale: chapters_stale.length,
    chapters_clean,
    chapters_uncomparable: chapters_uncomparable.length,
    chapters_unreadable: chapters_unreadable.length,
    stale: chapters_stale,
    uncomparable: chapters_uncomparable,
    unreadable: chapters_unreadable,
  };
  return report;
}
