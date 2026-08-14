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
  "The bibles are read one after another rather than all at once. Each of them is one question now - the run of verses is picked out of the chapter it arrives in - so forty bibles at once would be forty questions rather than the sixteen hundred it was when every verse was asked for by name. That is no longer past what the machine will lend, and reading them in turn is kept for the smaller reason: this is a measurement nobody is waiting on, and a server is owed the same politeness whether or not it would cope.";
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
