import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_glyph_chapters_marks_group_misread } from "./bible_glyph_chapters_marks_group_misread.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_group_roots } from "./bible_glyph_group_roots.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { bible_glyph_word_marks_edge } from "./bible_glyph_word_marks_edge.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { bible_glyph_word_draw } from "./bible_glyph_word_draw.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function bible_glyph_chapters_marks_group_misread_lines() {
  "Every place the written chapters let two neighbouring words be joined into a group that means something, said as the verse a person has to read: the join, the word it would spell, the whole verse drawn, and the two words either side of the gap on their own.";
  "THE GATE NAMES THIRTEEN VERSES AND NAMES NOTHING A PERSON CAN READ. Its answer is a chapter code, a verse number and two picture names, and every one of the two repairs it offers - reword one of the two words, or seat the group elsewhere - needs the sentence in front of you before it can be judged. Without this the only way to act on the gate was to open the chapter by hand, thirteen times, and work out which gap it meant.";
  "IT SAYS WHAT THE MISREADING MEANS and not only that there is one. The whole claim of the gate is that a reader who closes the gap reads a word nobody wrote; which word that is decides whether the verse is in real danger - a join that spells go in, inside a sentence about going in, misleads nobody, and a join that spells depart in a sentence about arriving changes what the verse says.";
  "THE TWO WORDS ARE DRAWN AGAIN ON THEIR OWN, because in the whole verse they are separated by the wide gap the writing system puts there and the risk is invisible by design. Printing them with nothing between them is the reader's mistake made on purpose, which is the only way to see what they would read.";
  "IT FINDS THE GAP BY ASKING THE SAME TWO EDGE READINGS THE WALK ASKED, rather than having the walk hand a position over. A position would be one more field to keep in step through a store the walk already shares with the touching count next door, and the edges are cheap; where a verse joins the same pair of pictures twice, both gaps are shown, which is what a person wants anyway.";
  arguments_assert(arguments, 0);
  let lookup = bible_glyph_characters_lookup([]);
  let found = bible_glyph_chapters_marks_group_misread();
  let misread = property_get(found, "misread");
  let lines = [];
  for (let entry of misread) {
    let chapter_code = property_get(entry, "chapter_code");
    let verse_number = property_get(entry, "verse_number");
    let group = property_get(entry, "group");
    let seated = bible_glyph_group_roots(group);
    let said = [];
    for (let root of seated) {
      let root_name = property_get(root, "root");
      let gloss = property_get(root, "gloss");
      let one = list_join_space([root_name, "-", gloss]);
      list_add(said, one);
    }
    let reads = list_join_comma_space(said);
    let verse_said = list_join_colon(["v", verse_number]);
    let heading = list_join_space([
      chapter_code,
      verse_said,
      group,
      "reads as",
      reads,
    ]);
    list_add(lines, heading);
    let chapter = bible_glyph_chapter(chapter_code);
    let verses = property_get(chapter, "verses");
    for (let verse of verses) {
      let left = property_get(verse, "verse_number");
      let here = equal(left, verse_number);
      if (not(here)) {
        continue;
      }
      let words = property_get(verse, "words");
      let drawn = bible_glyph_verse_draw(words, lookup);
      list_add(lines, drawn);
      let index = 1;
      while (less_than(index, words.length)) {
        let word_before = words[subtract(index, 1)];
        let word_after = words[index];
        index = add(index, 1);
        let before = bible_glyph_word_marks_edge(word_before, true);
        let missing = equal(before, null);
        if (missing) {
          continue;
        }
        let after = bible_glyph_word_marks_edge(word_after, false);
        let missing_after = equal(after, null);
        if (missing_after) {
          continue;
        }
        let tail = list_last(before);
        let head = list_first(after);
        let joined = tail + "+" + head;
        let wanted = equal(group, joined);
        if (not(wanted)) {
          continue;
        }
        let drawn_before = bible_glyph_word_draw(word_before, lookup);
        let drawn_after = bible_glyph_word_draw(word_after, lookup);
        let gap = list_join_space([
          "   ",
          drawn_before,
          "|",
          drawn_after,
          "-> joined:",
          drawn_before + drawn_after,
        ]);
        list_add(lines, gap);
      }
    }
    list_add(lines, "");
  }
  let text = list_join_newline(lines);
  return text;
}
