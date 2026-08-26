import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { or } from "./or.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export function bible_chapter_sense_group_texts(verses, groups, chapter_code) {
  "$plain verses";
  "$plain groups";
  "$plain chapter_code";
  "The words of one chapter gathered into its written-down parts, one piece of text for each part, verse numbers left out.";
  "WRITTEN-DOWN DIVISIONS AND A REAL CHAPTER CAN DISAGREE, AND THE DISAGREEMENT IS SILENT. The divisions are written once against one wording of the chapter and then read against every other, and translations do not all number their verses the same way - some join two into one, some hold a verse the others put in the chapter before. A part that ends up holding nothing, or a verse that falls between two parts, still produces text that reads perfectly well, and the only sign is a line missing from a song nobody counts.";
  "So both directions are checked. A part that gathered no verse at all stops this and says which part. Every verse of the chapter is also counted back: gather fewer than the chapter has and something fell through a gap, gather more and two parts claim the same verse - one number catches both, and it catches them whichever wording is being read.";
  "A verse belongs to the part whose numbers surround it, not to the part it happens to sit next to. Walking the verses in order and moving on to the next part at each boundary would come to the same thing on a chapter that agrees with its divisions, and would quietly paper over the case where it does not.";
  arguments_assert(arguments, 3);
  let texts = [];
  let taken = 0;
  for (let group of groups) {
    let from = property_get(group, "from");
    let to = property_get(group, "to");
    let held = [];
    for (let verse of verses) {
      let number_text = property_get(verse, "verse_number");
      let number = integer_to_try(number_text);
      let below = less_than(number, from);
      let above = greater_than(number, to);
      let outside = or(below, above);
      if (outside) {
        continue;
      }
      let text = property_get(verse, "text");
      list_add(held, text);
    }
    list_empty_not_is_assert_json(held, {
      chapter_code,
      group,
    });
    let size = list_size(held);
    taken = add(taken, size);
    let joined = list_join_newline(held);
    list_add(texts, joined);
  }
  let all = list_size(verses);
  equal_assert_json(taken, all, {
    chapter_code,
    taken,
    all,
  });
  return texts;
}
