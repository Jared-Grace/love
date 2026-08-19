import { round } from "./round.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { list_tally_ranked_top } from "./list_tally_ranked_top.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
export async function bible_glyph_chapter_draft_coverage(
  chapter_code,
  testament_name,
  count,
) {
  "$plain chapter_code";
  "$plain testament_name";
  "$plain count";
  "the code names one chapter, the testament names which root table to read it against, and the count is how many undrawn words to show. All three are data and none of them runs.";
  "How much of one chapter the root table can already draw, and which of the words it cannot draw turn up most often.";
  "IT ANSWERS WHICH CHAPTER TO AUTHOR NEXT, which was until now a guess made by reading a passage and forming an impression of it. Two chapters were picked that way and one of them was wrong: a psalm read as obviously drawable and turned out to need a whole vocabulary that does not exist. Reading a chapter costs an afternoon and answers about that chapter alone; this costs one call and can be asked of every candidate before any of them is opened.";
  "THE UNDRAWN WORDS ARE THE HALF THAT IS ACTED ON. A share alone says a chapter is thin and stops there. The commonest undrawn words say WHY it is thin, and each one is a candidate for a new glyph - which is how the light, the darkness and the witness were found, by authoring a passage and noticing the same English word four times in it. This answers the same question without having to author the passage first.";
  "ASK FOR MORE UNDRAWN WORDS THAN YOU WANT TO READ, because the head of that list is always the same and always useless. Measured on John one: of the first eight, seven were the interlinear's dash for a Greek word English does not say, the article, and the pronouns - none of which will ever be a picture. The words worth seeing start somewhere below that, so thirty is a better ask than eight.";
  "THEY ARE LEFT IN RATHER THAN FILTERED OUT, and that is deliberate rather than unfinished. Cutting them means typing a list of words that do not count, and a list typed once is a list that quietly stops matching - a reading narrowed by a word silently drops whatever falls outside it, and nothing goes red when it does. A reader skipping seven rows costs a second; a filter that has gone stale costs a wrong answer nobody checks.";
  "A HIGH SHARE IS NOT THE ONLY THING WORTH WANTING, so do not read this as a ranking. A chapter drawn nine tenths in pictures nobody has seen before is harder to read than one drawn two thirds in pictures a reader already met, and a chapter whose undrawn words are all proper names loses far less than one whose undrawn words are its verbs. The number narrows the choice; a person still makes it.";
  let rows = await bible_glyph_chapter_draft_words(
    chapter_code,
    testament_name,
  );
  let words = 0;
  let drawn = 0;
  let undrawn = [];
  for (let row of rows) {
    for (let word of row.words) {
      words = add(words, 1);
      let blank = equal(word.glyph, "");
      if (blank) {
        list_add(undrawn, word.gloss);
        continue;
      }
      drawn = add(drawn, 1);
    }
  }
  let top = multiply(drawn, 100);
  let n = divide(top, words);
  let share = round(n);
  let undrawn_commonest = list_tally_ranked_top(undrawn, count);
  let r = {
    chapter_code,
    verses: rows.length,
    words,
    drawn,
    share,
    undrawn_commonest,
  };
  return r;
}
