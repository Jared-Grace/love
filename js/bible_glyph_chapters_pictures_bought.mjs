import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter_glyph_names } from "./bible_glyph_chapter_glyph_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
export function bible_glyph_chapters_pictures_bought() {
  "What each authored picture Bible chapter cost in pictures nobody had drawn before it, in the order the chapters were written.";
  "A PICTURE IS BOUGHT ONCE AND USED FOREVER, so the cost belongs to the chapter that first needed it and to no later one. Walking the register in its own order is what decides that: the register is appended to, so its order is arrival order, and the first chapter holding a name is the chapter that paid for it.";
  "IT IS THE ORDER OF WRITING AND NOT THE ORDER OF THE BIBLE. Genesis one arrived thirty fourth, so in canon order it would appear to have bought pictures that were already sitting in the table, drawn months earlier for a Gospel. The question being asked is what the authoring cost, and only arrival order answers that.";
  "THE HAND COUNT IN THE REGISTER PROSE IS WHAT THIS REPLACES. That prose says a chapter cost four pictures and was the first to cost anything in eleven, and both numbers were counted by a person reading back over the register. A hand count goes stale silently: the next chapter that buys a picture makes the sentence wrong and nothing anywhere goes red.";
  "THE RUN OF FREE CHAPTERS IS CARRIED BESIDE EACH COST because that is the sentence people actually write. Nobody says a chapter cost four pictures without also saying how long the vocabulary had been holding, and working the run out again by hand from a list of counts is the same stale count in a second place.";
  arguments_assert(arguments, 0);
  let chapters = bible_glyph_chapters();
  let seen = [];
  let rows = [];
  let free_run = 0;
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let names = bible_glyph_chapter_glyph_names(chapter_code);
    let bought = [];
    for (let name of names) {
      let fresh = list_includes_not(seen, name);
      if (fresh) {
        list_add(bought, name);
        list_add(seen, name);
      }
    }
    let count = list_length(bought);
    let free_run_before = free_run;
    let none = equal(count, 0);
    if (none) {
      free_run = add(free_run, 1);
    }
    if (not(none)) {
      free_run = 0;
    }
    let row = {
      chapter_code,
      bought,
      count,
      free_run_before,
    };
    list_add(rows, row);
  }
  let glyphs = list_length(seen);
  let r = {
    chapters: rows,
    glyphs,
  };
  return r;
}
