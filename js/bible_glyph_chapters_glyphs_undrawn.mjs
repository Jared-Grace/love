import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_glyph_sharers } from "./bible_glyph_roots_glyph_sharers.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { add } from "./add.mjs";
import { bible_glyph_chapter_glyph_counts } from "./bible_glyph_chapter_glyph_counts.mjs";
export function bible_glyph_chapters_glyphs_undrawn() {
  arguments_assert(arguments, 0);
  ("Every picture the root tables seat on some original word that NO authored chapter has drawn even once.");
  ("A PICTURE ARRIVES UNDRAWN AND STAYS THAT WAY UNTIL SOMEBODY NAMES IT, which is the gap this closes. Seating a root writes one line in a table; the eleven hundred chapters already written go on spelling that word in plain English, and nothing in the repo says so. The only reading that could tell was asked one picture at a time and had to be told which picture, so the answer existed and the question had to be remembered by a person.");
  ("IT IS THE SET A LOOP WAS STANDING IN FOR. Five roots seated in one sitting meant five invocations of the one-picture draw, and a list carried by hand between them - which is the shape this repo calls a missing command. Asked this way the set finds itself, so it cannot drift from what is actually undrawn and it cannot fall behind the next root somebody seats.");
  ("A GROUP IS ONE PICTURE HERE AND NOT TWO, because the count it is measured against joins the parts with a plus and the root table spells it the same way. The human and the house are both drawn on nearly every page; the human-and-house together have never been drawn at all, and reading the parts separately would call that seat finished.");
  ("DRAWN ONCE ANYWHERE IS ENOUGH TO LEAVE THE ANSWER. This is not a coverage reading and must not be mistaken for one - a picture standing in a single verse of a single chapter is a picture somebody has started, and the verses it still misses are the shrink-only underdrawn reading's business rather than this one's. What is here is the strictly emptier question, and the only one whose answer is safe to act on without a person choosing.");
  ("IT WALKS THE TESTAMENTS RATHER THAN NAMING THE TABLES, the way the character gate next door does, so a third table added later is covered without this being edited.");
  let testaments = ebible_book_testaments();
  let seated = [];
  for (let testament of testaments) {
    let testament_name = property_get(testament, "name");
    let roots = bible_glyph_roots_testament_table(testament_name);
    let sharers = bible_glyph_roots_glyph_sharers(roots);
    for (let glyph of object_property_names(sharers)) {
      let fresh = list_includes_not(seated, glyph);
      if (fresh) {
        list_add(seated, glyph);
      }
    }
  }
  let chapters = bible_glyph_chapters();
  let drawn = [];
  let walked = 0;
  for (let chapter of chapters) {
    walked = add(walked, 1);
    let counts = bible_glyph_chapter_glyph_counts(chapter.chapter_code);
    for (let glyph of object_property_names(counts)) {
      let fresh = list_includes_not(drawn, glyph);
      if (fresh) {
        list_add(drawn, glyph);
      }
    }
  }
  let undrawn = [];
  for (let glyph of seated) {
    let never = list_includes_not(drawn, glyph);
    if (never) {
      list_add(undrawn, glyph);
    }
  }
  let r = {
    walked,
    seated: seated.length,
    undrawn,
  };
  return r;
}
