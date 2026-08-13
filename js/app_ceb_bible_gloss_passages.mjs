import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { bible_passages_grouped } from "./bible_passages_grouped.mjs";
export async function app_ceb_bible_gloss_passages(chapter_code) {
  "The passages of one chapter, divided exactly as the Cebuano gloss store already holds them, each carrying its Cebuano wording, its English wording, and the verse numbers it covers.";
  "This is what an author is handed before writing a chapter's word explanations, and it is read rather than chosen: the division is the one the store was built with, so a passage written now drops into the file beside passages written earlier without disturbing them.";
  "The folders are the ones the store's own chapter builder asks for rather than a fresh pair named here, because the Cebuano bible has to come first - it is the wording the explanations are about, and the reader that checks them against the passage takes the first text.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let chapters_codes = [chapter_code];
  let groups = await bible_passages_grouped(bible_folders, chapters_codes);
  return groups;
}
