import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_word_sentences_generic } from "./gloss_chapters_word_sentences_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_words_explained_two_ways() {
  "The words the Cebuano gloss store explains one way in one place of a chapter and a different way in another place of the same chapter, named beside how many different sentences each of them carries.";
  "★ THIS IS THE EXACT SET A HANDED-IN CORRECTION DESTROYS, AND THE REPAIR SAYS SO ITSELF WITHOUT KNOWING HOW MANY THERE ARE. A correction is written against one word of one chapter and is then set on every entry of that chapter carrying that word, because a word met twice is the same word. Where the two sightings needed different sentences the correction flattens both into one, and its own prose grants that there is nothing there that could tell. What nobody had is the size of what that rule is walking over.";
  "A word explained the same way at every sighting is not counted, because for that word the rule is exactly right and setting them all is what was wanted.";
  "The comparison is inside one chapter and never across chapters, because a correction is filed under a chapter and reaches no further. The same word explained two ways in two different chapters is not at risk from this and is not counted here.";
  "An entry carrying no explanation at all is passed over rather than counted as a way of explaining the word.";
  "The gathering that puts a chapter's words against their sentences is the shared walk, which is where the two rules above are actually kept; what is left here is only the counting.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let sightings = 0;
  let rows = [];
  function word_read(chapter_code, word, sentences) {
    let ways = list_size(sentences);
    sightings = add(sightings, 1);
    let one = equal(ways, 1);
    if (one) {
      return;
    }
    list_add(rows, {
      chapter: chapter_code,
      word: word,
      ways: ways,
    });
  }
  let walked = await gloss_chapters_word_sentences_generic(fn, word_read);
  let r = {
    chapters: property_get(walked, "chapters"),
    word_in_chapter: sightings,
    two_ways: list_size(rows),
    rows: rows,
  };
  return r;
}
