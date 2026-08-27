import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_groups_vocabulary } from "./bible_glyph_groups_vocabulary.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_set } from "./property_set.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_chapters_groups_marks_alone() {
  "For each group of pictures the tables seat a word on: every place the written chapters draw that group, every place they draw one of its pictures on its own, and the chapters that do both.";
  "A GROUP STANDS OR FALLS ON WHETHER ITS OWN PICTURES ARE SPENT ELSEWHERE. A group has no mark of its own and never will - what makes two touching pictures one word is a gap a shade narrower than the gap beside it. So a reader who meets the group in one verse and one of its pictures alone in another has to tell the two apart by counting a repeated sign, and counting a repeated sign is the one thing this scheme asks of a reader nowhere else.";
  "IT IS THE THIRD QUESTION IN THIS FAMILY AND THE ONLY ONE ABOUT ONE READER'S SITTING. The seating reading asks what two ordinary words could spell if they stood side by side; the misreading walk asks where two words already do. Both answer about the whole Bible at once. This one asks what a person actually meets while reading a single chapter through, which is the unit a reader experiences and the unit a rewrite is costed in.";
  "IT COUNTS RATHER THAN REFUSES, deliberately, and there is no gate over it. Every group seated today is already recorded as spellable and the record was seeded that way on purpose - clearing it means buying a picture, which is somebody's decision about money and not a fault an author introduced. A gate here would be red on the day it was written and would stay red until a purchase nobody has agreed to, which teaches everybody to ignore it.";
  "THE SHARED CHAPTERS ARE THE ANSWER AND THE TWO COUNTS ARE THE WORKING. A group drawn in one chapter and its picture drawn alone in a different one is a hazard a reader has to carry between sittings; the same two inside one chapter is a hazard inside one sitting, eleven verses apart. Those are different sizes of problem and reporting a single total would hide the difference.";
  "IT REPORTS HOW MANY PICTURES IT WALKED so a clean nought can be told from a blind one. A walk that read the stored shorthand instead of the parsed chapters finds no pictures at all and reports no hazards just as cheerfully as a Bible that has none, and that mistake has already been made twice on readings this one is built beside.";
  arguments_assert(arguments, 0);
  let vocabulary = bible_glyph_groups_vocabulary();
  let chapters = bible_glyph_chapters();
  let entries = [];
  for (let stored of chapters) {
    let chapter_code = property_get(stored, "chapter_code");
    let chapter = bible_glyph_chapter(chapter_code);
    let verses = property_get(chapter, "verses");
    for (let verse of verses) {
      let verse_number = property_get(verse, "verse_number");
      let words = property_get(verse, "words");
      for (let word of words) {
        let plain = equal(typeof word, "string");
        if (plain) {
          continue;
        }
        for (let part of word) {
          let text = equal(typeof part, "string");
          if (text) {
            continue;
          }
          list_add(entries, {
            chapter_code,
            verse_number,
            names: part,
          });
        }
      }
    }
  }
  let rows = [];
  for (let group of vocabulary) {
    let parts = bible_glyph_group_names(group);
    let drawn = [];
    let alone = [];
    let drawn_chapters = {};
    for (let entry of entries) {
      let names = property_get(entry, "names");
      let joined = names.join("+");
      let whole = equal(joined, group);
      if (whole) {
        list_add(drawn, entry);
        let property_name = property_get(entry, "chapter_code");
        property_set(drawn_chapters, property_name, true);
        continue;
      }
      let single = list_size_equal(names, 1);
      if (not(single)) {
        continue;
      }
      let name = list_first(names);
      let component = list_includes(parts, name);
      if (component) {
        list_add(alone, entry);
      }
    }
    let shared = [];
    for (let entry of alone) {
      let chapter_code = property_get(entry, "chapter_code");
      let both = property_exists(drawn_chapters, chapter_code);
      if (not(both)) {
        continue;
      }
      let already = list_includes(shared, chapter_code);
      if (already) {
        continue;
      }
      list_add(shared, chapter_code);
    }
    list_add(rows, {
      group,
      parts,
      drawn_count: list_size(drawn),
      alone_count: list_size(alone),
      shared_chapters: shared,
      drawn,
      alone,
    });
  }
  let r = {
    chapters: list_size(chapters),
    glyphs_walked: list_size(entries),
    groups: list_size(vocabulary),
    rows,
  };
  return r;
}
