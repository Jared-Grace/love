import { bible_glyph_chapter_jhn03 } from "./bible_glyph_chapter_jhn03.mjs";
import { bible_glyph_chapter_jhn01 } from "./bible_glyph_chapter_jhn01.mjs";
import { bible_glyph_chapter_1jn04 } from "./bible_glyph_chapter_1jn04.mjs";
export function bible_glyph_chapters() {
  "Every picture Bible chapter written so far, given as its chapter code and its shorthand.";
  "Three chapters today, and the list is here rather than the chapters being found by name so that nothing has to guess what exists. A reader asking what this Bible contains gets an answer instead of a search.";
  "THE THIRD WAS CHOSEN BY MEASURING RATHER THAN BY READING, which is the change worth noticing about this list. The first two were picked because somebody thought they would draw well; John three was asked of the root table before a word of it was authored, and the table answered with a share and with the words it could not draw. That is repeatable by anyone, so the fourth chapter need not be a matter of taste either.";
  "THEY ARE IN THE ORDER THEY WERE WRITTEN and deliberately not in the order of the Bible. The second chapter draws the grammar words and the first does not, so reading them in this order is reading the project's two lanes in the order they were tried - and a reader who meets the newer one second meets it as an answer to the older one rather than as an unexplained difference.";
  "The chapters stay one function each rather than one large one, because a chapter is what a person authors in a sitting and what a peer reviews in a sitting, and two people writing two chapters should never be editing the same file.";
  let first = bible_glyph_chapter_1jn04();
  let second = bible_glyph_chapter_jhn01();
  let third = bible_glyph_chapter_jhn03();
  let chapters = [first, second, third];
  return chapters;
}
