import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_unwritten } from "./app_ceb_bible_gloss_words_unwritten.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function app_ceb_bible_gloss_words_unwritten_names() {
  "Every word the Cebuano gloss store explains that the Cebuano translation never writes standing alone, in one flat sorted list.";
  "The reading beside this one answers with three counts and the words together, which is what a person weighing how bad it is wants to see. A record cannot be kept in that shape: the counts move whenever anybody authors a chapter, so a record holding them would go red on work that changed nothing about this question.";
  "★ THE WORD IS ITS OWN NAME HERE, WHICH IS WHY NOTHING ELSE IS PUT BESIDE IT. Where an explanation stands is not part of what went wrong - the same word explained in four chapters is one thing to settle and one line to settle it in, and a chapter code beside it would turn one reading job into four lines that all mend at once.";
  "The words arrive lowered and distinct from the reading, because the comparison that found them is made in small letters. Only the order is chosen here, and it is chosen so two runs of a record can be read against each other by eye.";
  "The test is not repeated here. It is asked for from the reading that makes it, so this list and the counts beside it can never come to be about different sets of words.";
  arguments_assert(arguments, 0);
  let measured = await app_ceb_bible_gloss_words_unwritten();
  let words = property_get(measured, "words");
  let sorted = list_sort_text(words);
  return sorted;
}
