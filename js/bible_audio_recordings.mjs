import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
export async function bible_audio_recordings() {
  "Every recording of a chapter anywhere on this disk, each named by the translation it was read from and the chapter it holds.";
  "★ IT FINDS ITS OWN SET, WHICH IS THE ONLY WAY A SWEEP OVER RECORDINGS CAN STAY TRUE. Handed a list, a sweep goes on reporting about chapters that have been deleted and stays silent about ones recorded since the list was written, and both mistakes look exactly like a clean answer. Reading the folders every time costs one listing and removes that whole class of wrongness.";
  "★ THE ORDER IS THE ORDER ON DISK RATHER THAN THE ORDER THE READS FINISHED IN. The folders are read at the same time because they do not depend on each other, but the answers are put back in the order they were asked for, so two runs over an unchanged disk give the same list and a difference between them is a real difference.";
  "★ IT SAYS NOTHING ABOUT WHETHER A RECORDING IS ANY GOOD. A folder here may hold sound cut by a rule nobody uses any more, or sound whose translation is not on this disk at all. That judgment belongs to whoever asks the question; this only says what there is to ask about.";
  arguments_assert(arguments, 0);
  let root = bible_audio_root_folder();
  let bible_folders = await folder_read(root);
  async function bible_each(bible_folder) {
    let folder = path_join([root, bible_folder]);
    let chapter_codes = await folder_read(folder);
    function chapter_each(chapter_code) {
      let recording = {
        bible_folder,
        chapter_code,
      };
      return recording;
    }
    let list = list_map(chapter_codes, chapter_each);
    return list;
  }
  let lists = await list_map_async(bible_folders, bible_each);
  let recordings = list_flat(lists);
  return recordings;
}
