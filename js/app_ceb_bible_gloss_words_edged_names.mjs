import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_edged } from "./app_ceb_bible_gloss_words_edged.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function app_ceb_bible_gloss_words_edged_names() {
  "Every word the Cebuano gloss store explains while it still carries a mark from the sentence around it, named once each and spelled the way the store spells it, mark and all.";
  "★ THE THREE LISTS ARE PUT BACK TOGETHER HERE ON PURPOSE, BECAUSE ONLY THEIR UNION HOLDS STILL. Which of the three a word falls into is the dictionary's answer about the same word spelled bare, so a gather run moves words between them without a single explanation having been touched - a record kept per list would go red on work that changed nothing about this. Whether a word carries a mark at all is settled by the store alone and moves only when somebody authors or mends a chapter, which is exactly what a record is for.";
  "The mark is kept in the name rather than trimmed off. It is the whole of what went wrong, and the bare spelling is already the thing every other check asks about and finds nothing under - a record written in bare spellings would name words that are not in the store at all.";
  "The sightings are left out. They count how often the word was met rather than how many explanations there are to mend, so a chapter authored today that happens to use the word would read as the fault getting worse when nothing about it changed.";
  "The test is not repeated here. It is asked for from the reading that prices it, so this list and the counts beside it can never come to be about different sets of words.";
  arguments_assert(arguments, 0);
  let priced = await app_ceb_bible_gloss_words_edged();
  let broken_down = property_get(priced, "broken_down");
  let refused = property_get(priced, "refused");
  let unknown = property_get(priced, "unknown");
  let rows = list_concat_multiple([broken_down, refused, unknown]);
  function row_spelled(row) {
    let spelled = property_get(row, "word");
    return spelled;
  }
  let spelled_all = list_map(rows, row_spelled);
  let unique = list_unique(spelled_all);
  let sorted = list_sort_text(unique);
  return sorted;
}
