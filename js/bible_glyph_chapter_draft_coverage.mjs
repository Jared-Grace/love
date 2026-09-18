import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { bible_glyph_proper_name_numbers_cache } from "./bible_glyph_proper_name_numbers_cache.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { multiply } from "./multiply.mjs";
import { divide_round } from "./divide_round.mjs";
import { list_tally_ranked_top } from "./list_tally_ranked_top.mjs";
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
  "A PROPER NAME IS SETTLED AND NOT OWED, so the share counts it as done. A word left in English because no picture exists yet is work waiting to be done; a name left in English is finished, because Habakkuk is not a thing anybody can draw and a reader given a picture there would have lost the one fact the word carries. Counting names as gaps read every chapter low by however much of it is names - over the whole Bible that was four points - and it read the most name-heavy chapters lowest, which is exactly backwards.";
  "BOTH NUMBERS ARE HANDED BACK BECAUSE THEY ANSWER DIFFERENT QUESTIONS. The share says how much of a chapter is settled, which is what decides whether it is worth authoring; the drawn share says how much of it is actually pictures, which is what decides how it will read. A chapter that is half pictures and a quarter names reads nothing like one that is three quarters pictures, and a single number cannot say which of the two is in front of you.";
  "NAMES LEAVE THE LIST OF COMMONEST UNDRAWN WORDS, and that is not the typed filter argued against above. Nothing is spelled out here to be skipped: what counts as a name is asked of the interlinear's own parsing, per number, and the answer moves when the interlinear does. The list exists to suggest the next picture to draw, and a name is the one word that will never be one.";
  "A HIGH SHARE IS NOT THE ONLY THING WORTH WANTING, so do not read this as a ranking. A chapter drawn nine tenths in pictures nobody has seen before is harder to read than one drawn two thirds in pictures a reader already met, and a chapter whose undrawn words are all proper names loses far less than one whose undrawn words are its verbs. The number narrows the choice; a person still makes it.";
  let rows = await bible_glyph_chapter_draft_words(
    chapter_code,
    testament_name,
  );
  let told = await bible_glyph_proper_name_numbers_cache(testament_name);
  let is_name_number = {};
  for (let strong of told.numbers) {
    property_set(is_name_number, strong, true);
  }
  let words = 0;
  let drawn = 0;
  let named = 0;
  let undrawn = [];
  for (let row of rows) {
    for (let word of row.words) {
      words = add(words, 1);
      let blank = equal(word.glyph, "");
      if (not(blank)) {
        drawn = add(drawn, 1);
        continue;
      }
      let property = String(word.strong);
      let seated = property_get_or_null(is_name_number, property);
      let is_name = null_not_is(seated);
      if (is_name) {
        named = add(named, 1);
        continue;
      }
      list_add(undrawn, word.gloss);
    }
  }
  let settled = add(drawn, named);
  let top = multiply(settled, 100);
  let share = divide_round(top, words);
  let top2 = multiply(drawn, 100);
  let share_drawn = divide_round(top2, words);
  let undrawn_commonest = list_tally_ranked_top(undrawn, count);
  let r = {
    chapter_code,
    verses: rows.length,
    words,
    drawn,
    named,
    settled,
    share,
    share_drawn,
    undrawn_commonest,
  };
  return r;
}
