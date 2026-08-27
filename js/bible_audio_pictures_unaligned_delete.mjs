import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { path_join } from "./path_join.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { bible_audio_chapter_aligned_is } from "./bible_audio_chapter_aligned_is.mjs";
import { list_add } from "./list_add.mjs";
import { file_delete } from "./file_delete.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { add } from "./add.mjs";
export async function bible_audio_pictures_unaligned_delete() {
  "Takes away every chapter picture drawn from a piece of sound that holds no whole verse, across every recorded bible on this disk, and says what it took.";
  "★ A LEFT-OVER PICTURE IS WORSE THAN A MISSING ONE, WHICH IS WHY THIS DELETES RATHER THAN REPORTS. The video builder draws a picture only when none is there, so a chapter re-recorded verse by verse keeps whichever old pictures happen to be numbered low enough and draws the rest. The result is a video where the first few screens show the wrong words and every screen after them is right, and nothing anywhere goes red - the pictures are real pictures and the verses are real verses.";
  "★ IT FINDS ITS OWN SET, SO IT CANNOT BE RUN AGAINST A STALE LIST. The chapters worth clearing change every time one is re-recorded, and a list typed by a caller goes out of date the moment that happens. Reading the note beside each recording asks the disk what is true now.";
  "★ AN ALIGNED RECORDING KEEPS ITS PICTURES AND THEY ARE COUNTED SEPARATELY. That count is the check on this: it should hold every chapter recorded since the cutting was fixed, so a run that clears one of those is a fault to read rather than a clean-up to trust.";
  arguments_assert(arguments, 0);
  let root = bible_audio_root_folder();
  let bible_folders = await folder_read(root);
  let cleared = [];
  let kept = [];
  let deleted = 0;
  async function bible_each(bible_folder) {
    let folder = path_join([root, bible_folder]);
    let chapter_codes = await folder_read(folder);
    async function chapter_each(chapter_code) {
      let chapter_folder = bible_audio_folder(bible_folder, chapter_code);
      let files = await folder_read_files(chapter_folder);
      function picture_is(name) {
        let is = text_ends_with(name, ".png");
        return is;
      }
      let pictures = list_filter(files, picture_is);
      let count = pictures.length;
      if (equal(count, 0)) {
        return;
      }
      let aligned = await bible_audio_chapter_aligned_is(
        bible_folder,
        chapter_code,
      );
      let row = {
        bible_folder,
        chapter_code,
        pictures: count,
      };
      if (aligned) {
        list_add(kept, row);
        return;
      }
      async function picture_each(name) {
        let p = path_join([chapter_folder, name]);
        await file_delete(p);
      }
      await list_map_async(pictures, picture_each);
      deleted = add(deleted, count);
      list_add(cleared, row);
    }
    await list_map_async(chapter_codes, chapter_each);
  }
  await list_map_async(bible_folders, bible_each);
  let report = {
    deleted,
    chapters_cleared: cleared.length,
    chapters_kept: kept.length,
    cleared,
    kept,
  };
  return report;
}
