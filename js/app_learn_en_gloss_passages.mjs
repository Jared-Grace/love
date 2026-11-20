import { app_learn_en_gloss_bible_folders } from "./app_learn_en_gloss_bible_folders.mjs";
import { bible_passages_grouped } from "./bible_passages_grouped.mjs";
export async function app_learn_en_gloss_passages(language_code, chapter_code) {
  "The passages of one chapter, each carrying its English wording, its wording in the reader's language, and the verse numbers it covers.";
  "This is what an author is handed before writing a chapter's word explanations, and the division is read rather than chosen, so a passage written now drops into the file beside passages written earlier without disturbing them.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let bible_folders = app_learn_en_gloss_bible_folders(language_code);
  let chapters_codes = [chapter_code];
  let groups = await bible_passages_grouped(bible_folders, chapters_codes);
  return groups;
}
