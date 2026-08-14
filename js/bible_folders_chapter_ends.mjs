import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_chapter_verses_download } from "./bible_folder_chapter_verses_download.mjs";
import { bible_verses_ends } from "./bible_verses_ends.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_folders_chapter_ends(
  bible_folders,
  chapter_code,
  count,
) {
  "Reads the same opening run of one chapter in several bibles and answers, for each of them, which of its verses finish a sentence.";
  "The bibles are read one after another rather than all at once. Every one of them is already a run of verses fetched together, and asking forty bibles for forty verses each at the same moment is sixteen hundred questions in flight - past what the machine will lend and past what is polite to ask of a server. One bible at a time keeps the widest question this repo asks the same width as the narrowest.";
  arguments_assert(arguments, 3);
  let ends_each = [];
  for (let bible_folder of bible_folders) {
    let verses = await bible_folder_chapter_verses_download(
      bible_folder,
      chapter_code,
      count,
    );
    let ends = bible_verses_ends(verses);
    list_add(ends_each, ends);
  }
  return ends_each;
}
