import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { list_first } from "./list_first.mjs";
export function app_ceb_bible_gloss_bible_folder() {
  arguments_assert(arguments, 0);
  ("The one Bible a Cebuano gloss is written from, out of the pair a chapter is written beside.");
  ("A chapter is written from two Bibles, the Cebuano text and the English read beside it, and the pair stands first because a chapter needs both. A reading that only wants to know what the Cebuano says wants the first of the two and nothing else, and several of them were taking the pair and then taking the first of it, which says by the shape of the lines that the choice was made here rather than where the pair is written down.");
  ("It goes through the pair rather than asking for the Cebuano folder straight, so that the two stay one decision. Whichever text a Cebuano gloss is written from is settled in the one place the pair is built, and this follows it.");
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let bible_folder = list_first(bible_folders);
  return bible_folder;
}
