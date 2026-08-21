import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { add } from "./add.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_take } from "./list_take.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapters_undrawn_commonest(count) {
  "$plain count";
  "the count is how many words to show. It is a number and nothing that runs.";
  "The words this picture Bible leaves in English most often across every chapter it has written, commonest first, with how many of those chapters each one would improve.";
  "IT ASKS WHICH PICTURE TO DRAW NEXT, which is a different question from the one asked chapter by chapter next door. That reading answers which chapter to author, and its undrawn list is about one passage - so a word that is everywhere and a word that happens four times in one psalm come back looking alike. Growing the vocabulary is the only work that helps every reader at once, and it cannot be aimed from one chapter.";
  "IT REPORTS HOW MANY CHAPTERS A WORD TOUCHES BESIDE HOW OFTEN IT OCCURS, because the two disagree and the second one is the one that decides. A word said twenty times inside a single chapter buys that chapter and nothing else; a word said once in twelve of them lifts twelve readings. Ranked by occurrences alone the first kind sits above the second, which is exactly backwards for choosing a picture.";
  "IT FINDS ITS OWN SET rather than being handed a list of chapters, so a sixteenth chapter is counted the moment it is written and no list can fall behind what exists. The testament of each chapter is read off the canon for the same reason: the two Strong's numberings collide, and a chapter weighed against the wrong table answers well-formedly about words that are not there.";
  "IT DOES NOT FILTER THE GRAMMAR OUT, and the head of the answer is therefore always the article, the pronouns and the interlinear's dash for a word English does not say. Cutting them means typing a list of words that do not count, and a list typed once quietly stops matching without anything going red. Ask for more rows than you mean to read; the words worth seeing start below that head.";
  "A HIGH COUNT IS A CANDIDATE AND NEVER A DECISION. Some of these are deliberately drawn as nothing, and the reasons are written down where that choice was made; others are proper names, which this Bible never draws; and a few would need artwork that does not exist. The number says where to look and a person still decides.";
  let chapters = bible_glyph_chapters();
  let occurrences = {};
  let chapters_seen = {};
  let words_total = 0;
  let drawn_total = 0;
  let filler_total = 0;
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let testament_name = bible_chapter_testament_name(chapter_code);
    let rows = await bible_glyph_chapter_draft_words(
      chapter_code,
      testament_name,
    );
    let here = {};
    for (let row of rows) {
      for (let word of row.words) {
        words_total = add(words_total, 1);
        let blank = equal(word.glyph, "");
        if (not(blank)) {
          drawn_total = add(drawn_total, 1);
          continue;
        }
        let gloss = word.gloss;
        let filler = bible_glyph_chapters_undrawn_filler_is(gloss);
        if (filler) {
          filler_total = add(filler_total, 1);
        }
        property_count_add(occurrences, gloss, 1);
        property_set(here, gloss, true);
      }
    }
    for (let gloss of object_property_names(here)) {
      property_count_add(chapters_seen, gloss, 1);
    }
  }
  let ranked = [];
  for (let gloss of object_property_names(occurrences)) {
    list_add(ranked, {
      gloss,
      occurrences: property_get(occurrences, gloss),
      chapters: property_get(chapters_seen, gloss),
    });
  }
  function lambda(row) {
    let n = property_get(row, "occurrences");
    return n;
  }
  list_sort_number_mapper_reverse(ranked, lambda);
  let many = Number(count);
  let commonest = list_take(ranked, many);
  let report = {
    chapters: chapters.length,
    words: words_total,
    drawn: drawn_total,
    undrawn_words_distinct: ranked.length,
    commonest,
  };
  return report;
}
