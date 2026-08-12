import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { bible_passages_grouped } from "./bible_passages_grouped.mjs";
export async function app_original_bible_gloss_passages(chapter_code) {
  "The passages of one chapter, divided exactly as the gloss store already holds them, each carrying its original-language wording, its English wording, and the verse numbers it covers.";
  "This is what an author is handed before writing a chapter's word explanations, and it is read rather than chosen: the division is the one the store was built with, so a passage written now drops into the file beside passages written earlier without disturbing them.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let bible_folder = ebible_folder_english();
  let bible_folders = [bible_folder];
  let chapters_codes = [chapter_code];
  let groups = await bible_passages_grouped(bible_folders, chapters_codes);
  return groups;
}
