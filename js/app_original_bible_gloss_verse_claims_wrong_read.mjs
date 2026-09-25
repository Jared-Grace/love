import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_chapters_verse_claims_wrong } from "./app_original_bible_gloss_chapters_verse_claims_wrong.mjs";
import { gloss_chapters_claims_wrong_read } from "./gloss_chapters_claims_wrong_read.mjs";
export async function app_original_bible_gloss_verse_claims_wrong_read() {
  "Every original-language word explanation naming a verse of its own chapter that holds no word with the same Strong's number, laid out for a person to read: the name the record keeps it under, and beside it the sentence that made the finding.";
  "★ THE RECORD AND THE READING ARE THE SAME SWEEP ASKED FOR DIFFERENT THINGS, AND THE READING IS THE HALF THAT WAS MISSING. The record holds names because prose goes stale on the mending; but a standing row here is a reading queue rather than a verdict, and a name alone tells a reader a verse was named without telling them what was said about it. Settling a row then cost opening the store at that chapter and hunting the word by hand, which is a file read per row over a queue a hundred and fifty long.";
  "What a reader is deciding, row by row, is which of three things the sentence does. It may claim the word itself stands in the verse it names, which is wrong and wants mending. It may point at some other word standing there - built on the same verb as the teaching in verse fourteen - which is right, and arrives here because a related word carries a different number. Or it may say the word was absent from that verse, which is right too. The last two are banked deliberately; only the first is a fault.";
  arguments_assert(arguments, 0);
  let chapters = await app_original_bible_gloss_chapters_verse_claims_wrong();
  let rows = gloss_chapters_claims_wrong_read(chapters);
  return rows;
}
