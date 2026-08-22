import { bible_glyph_chapter_undrawn_deliberate } from "./bible_glyph_chapter_undrawn_deliberate.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_glyph_names } from "./bible_glyph_chapter_glyph_names.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapters_table_behind() {
  arguments_assert(arguments, 0);
  ("Every authored picture Bible chapter that the root table has since grown past: the pictures the table now seats for words of that chapter which the chapter itself never draws, with the word each one would land on.");
  ("IT IS THE GAP BETWEEN A TABLE AND A CHAPTER, and nothing else measures it. A chapter is authored once, by hand, out of whatever the table seated on the day it was written; the table then keeps growing, and every word seated afterwards stays in English in every chapter already finished. Nothing goes red, nothing is rebuilt, and the chapter simply reads as though that word were undrawable. The coverage survey next door cannot see this at all - it asks what the table draws, and the table draws it.");
  ("THAT IS THE SAME FAULT THE BANDS HAD, ONE FLOOR UP. The English bands under the pictures were being built by a reading that had been corrected while the written files had not, and a mark sat in two hundred and twenty six committed verses for weeks. The pictures have the same shape of problem and a worse one, because a band can be rebuilt by a command and a chapter cannot - what closes this is a person authoring the verse again.");
  ("A PICTURE THE CHAPTER NEVER DRAWS AT ALL IS THE ONLY THING REPORTED, and that is deliberately less than the question deserves. A picture drawn in one verse and missing from another may be an author choosing the shape of a sentence - which is the one thing authoring actually decides - so counting occurrences here would report the author's own judgment back as a fault. Never once in the whole chapter cannot be a shape decision, so it is the part of the answer that can be trusted. This therefore UNDERSTATES, and a chapter absent from the answer is not thereby up to date.");
  ("A GROUP IS BEHIND IF ANY ONE OF ITS NAMES IS MISSING. Two pictures standing for one word are drawn touching, so a chapter holding one of them and not the other cannot be drawing the group - and asking for all of the names rather than any of them is what keeps a picture that happens to be shared with an unrelated word from hiding the gap.");
  ("IT NAMES THE WORD AND NOT ONLY THE PICTURE, because a person reading this is about to open a chapter and find somewhere to put a mark. The original and the English are what let them search the verse; the picture alone would tell them a thing is missing and leave them to find where.");
  ("A PICTURE A CHAPTER REFUSED ON PURPOSE IS NOT WORK AND IS REPORTED SEPARATELY. This reading can see what a chapter did not draw and can never see why, so a refusal argued out in the chapter's own prose used to arrive here looking exactly like the drift this was built to find. Measured on the day the consulting was added, three chapters came back behind and two of the three were settled decisions - the Red Sea, which is a name, and a speech bubble that would have landed touching its own English translation. The answer was more wrong than right.");
  ("THE REFUSALS ARE CONSULTED AND NEVER SUBTRACTED IN SILENCE. They are counted, named, and handed back with the reason attached, because a number nobody can check is worth less than a number somebody can argue with - which is the rule the word-level refusal lists set for themselves and the reason they write their reasons down.");
  let chapters = bible_glyph_chapters();
  let deliberate = bible_glyph_chapter_undrawn_deliberate();
  let behind = [];
  let settled = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let testament_name = bible_chapter_testament_name(chapter_code);
    let drawn = bible_glyph_chapter_glyph_names(chapter_code);
    let used = {};
    for (let name of drawn) {
      property_set(used, name, true);
    }
    let rows = await bible_glyph_chapter_draft_words(
      chapter_code,
      testament_name,
    );
    let missing = {};
    for (let row of rows) {
      for (let word of row.words) {
        let glyph = property_get(word, "glyph");
        let blank = equal(glyph, "");
        if (blank) {
          continue;
        }
        let absent = bible_glyph_chapters_table_behind_absent(used, glyph);
        if (not(absent)) {
          continue;
        }
        let seen = property_or_null(missing, glyph);
        let first = null_is(seen);
        if (first) {
          seen = {
            glyph,
            original: property_get(word, "original"),
            gloss: property_get(word, "gloss"),
            strong: property_get(word, "strong"),
            occurrences: 0,
          };
          property_set(missing, glyph, seen);
        }
        seen.occurrences = add(seen.occurrences, 1);
      }
    }
    let names = object_property_names(missing);
    let glyphs = [];
    for (let name of names) {
      let item = property_get(missing, name);
      let because = bible_glyph_chapters_table_behind_because(
        deliberate,
        chapter_code,
        name,
      );
      let b = null_is(because);
      let refused = not(b);
      if (refused) {
        item.chapter_code = chapter_code;
        item.because = because;
        list_add(settled, item);
        continue;
      }
      list_add(glyphs, item);
    }
    let none = list_empty_is(glyphs);
    if (none) {
      continue;
    }
    list_add(behind, {
      chapter_code,
      glyphs,
    });
  }
  let r = {
    chapters: list_size(chapters),
    behind_count: list_size(behind),
    settled_count: list_size(settled),
    behind,
    settled,
  };
  return r;
  function bible_glyph_chapters_table_behind_because(
    deliberate_rows,
    chapter_code,
    glyph,
  ) {
    "the reason one chapter leaves one seated picture in English on purpose, or nothing at all when no such decision has been written.";
    for (let row of deliberate_rows) {
      let left = property_get(row, "chapter_code");
      let same_chapter = equal(left, chapter_code);
      if (not(same_chapter)) {
        continue;
      }
      let left2 = property_get(row, "glyph");
      let same_glyph = equal(left2, glyph);
      if (not(same_glyph)) {
        continue;
      }
      let v = property_get(row, "because");
      return v;
    }
    let v2 = null;
    return v2;
  }
  function bible_glyph_chapters_table_behind_absent(used, glyph) {
    "whether an authored chapter is missing any name of one seated picture, so that it cannot be drawing that picture anywhere.";
    let names = bible_glyph_group_names(glyph);
    for (let name of names) {
      let held = property_exists(used, name);
      if (not(held)) {
        let v = true;
        return v;
      }
    }
    let v2 = false;
    return v2;
  }
}
