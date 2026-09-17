import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { add } from "./add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapters_name_tag_fire_joined_names_walked() {
  "Every picture Bible verse that writes the name tag and the fire with nothing between them, named by chapter, verse and how many times, together with how many verses were opened.";
  "THIS IS NOT A FAULT LIST AND THE NAME SAYS SO. Genesis writes the LORD God, where the two marks really do stand side by side and the picture is right. Deuteronomy writes the LORD your God, where a chapter that ate its glue drops the your and lands on the identical pair. Nothing in the pair itself tells those apart, so what is counted here is the spelling and a person decides which book it belongs to.";
  "THE PHRASE WAS CHOSEN BECAUSE THE CORPUS ITSELF WRITES IT BOTH WAYS. Three measures of how crowded a chapter's marks are all confounded: seven glyphs are function words, a subject and its verb have no glue to eat, and the same pair is correct in one book and wrong in the next. Counting one phrase the subject spells two ways needs no threshold of mine, and it named the two guilty chapters exactly.";
  "The count of times is part of the name rather than dropped, because a verse can hold the pair twice and a repair that mended one of them would otherwise leave the record reading true.";
  "How many verses were opened travels out beside the names, because an empty offender list is also what a sweep that stopped reaching the chapters would hand back.";
  arguments_assert(arguments, 0);
  let chapters = bible_glyph_chapters();
  let offenders = [];
  let walked = 0;
  for (let chapter of chapters) {
    for (let verse of chapter.verses) {
      walked = add(walked, 1);
      let words = verse.words;
      let joined = 0;
      for (let at = 1; less_than(at, words.length); at = add(at, 1)) {
        let before = words[subtract(at, 1)];
        let word = words[at].replace(/[.,;:?!]+$/, "");
        if (equal(before, "$name_tag") && equal(word, "$fire")) {
          joined = add(joined, 1);
        }
      }
      if (greater_than(joined, 0)) {
        let name = list_join_space([
          chapter.chapter_code,
          verse.verse_number,
          joined,
        ]);
        list_add(offenders, name);
      }
    }
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
