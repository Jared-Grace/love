import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_verse_claims_wrong } from "./app_en_learn_bible_gloss_urdu_chapters_verse_claims_wrong.mjs";
import { gloss_chapters_claims_wrong_read } from "./gloss_chapters_claims_wrong_read.mjs";
export async function app_en_learn_bible_gloss_urdu_verse_claims_wrong_read() {
  "Every Urdu word explanation naming a verse of its own chapter that holds no word of the same spelling, laid out for a person to read: the name the record keeps it under, and beside it the sentence that made the finding.";
  "★ THIS IS THE SIBLING THE BIGGEST OF THE THREE STORES WAS MISSING, AND THE SIZE IS THE WHOLE ARGUMENT FOR IT. The record here stands at two thousand eight hundred and ninety-one names. Settling one of those from a name alone costs opening the store at that chapter and hunting the word by hand, so a queue that long is a queue nobody starts. With the sentence beside the name a reader can sort the whole queue by what the sentences say and mend a class at a time.";
  "The Urdu store is met by spelling and not by a dictionary entry, because the words being explained are English words and English hardly changes a word's ending. That is why this queue is so much longer than the original-language one in proportion: an English word can be the same six letters in two unrelated senses, and every such pair lands here.";
  "What a reader is deciding, row by row, is the same three things as next door. The sentence may claim the word itself stands in the verse it names, which is wrong and wants mending. It may point at some other word standing there, which is right. Or it may say the word was absent from that verse, which is right too. Only the first is a fault.";
  arguments_assert(arguments, 0);
  let chapters =
    await app_en_learn_bible_gloss_urdu_chapters_verse_claims_wrong();
  let rows = gloss_chapters_claims_wrong_read(chapters);
  return rows;
}
