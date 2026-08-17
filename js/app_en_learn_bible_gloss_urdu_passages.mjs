import { app_en_learn_bible_gloss_urdu_bible_folders } from "./app_en_learn_bible_gloss_urdu_bible_folders.mjs";
import { bible_passages_grouped } from "./bible_passages_grouped.mjs";
export async function app_en_learn_bible_gloss_urdu_passages(chapter_code) {
  "The passages of one chapter, divided exactly as the Urdu gloss store already holds them, each carrying its English wording, its Urdu wording, and the verse numbers it covers.";
  "This is what an author is handed before writing a chapter's word explanations, and it is read rather than chosen: the division is the one the store was built with, so a passage written now drops into the file beside passages written earlier without disturbing them.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let bible_folders = app_en_learn_bible_gloss_urdu_bible_folders();
  let chapters_codes = [chapter_code];
  let groups = await bible_passages_grouped(bible_folders, chapters_codes);
  return groups;
}
