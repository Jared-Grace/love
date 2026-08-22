import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
export function bible_glyph_roots_marks_edges_free() {
  "Every picture the glyph tables use, and of those the ones no seated word ever ends with and the ones no seated word ever begins with - which are the only pictures a new group can safely be built out of.";
  "IT TURNS AN OPEN JUDGEMENT INTO A SHORT LIST. A group of two pictures can be spelled by accident whenever some word ends in its first picture and some word begins with its second, because juxtaposition is the whole of the writing system and a group has no mark of its own. So a group is safe exactly when one of its two halves is impossible at that end - and which pictures those are is a fact about the tables rather than a matter of taste.";
  "EITHER HALF IS ENOUGH, WHICH IS WHY BOTH LISTS ARE HANDED BACK. Nothing can put a word in front of a picture that no word ends with, and nothing can put a word behind a picture that no word begins with; a group needs only one of those to be true of it. Handing back one list would quietly halve the choices available to whoever is seating the next group.";
  "BOTH TABLES ARE POOLED because a group belongs to the scheme rather than to a testament, and a picture that is safe in Greek and unsafe in Hebrew is unsafe. The reading that counts the hazards keeps the two apart, because that one is measuring what has already happened; this one is choosing what to do next, and a choice has to hold on both sides.";
  "A PICTURE NOT IN THIS ANSWER AT ALL IS SAFER STILL. What comes back is only the pictures the tables already use, so an unseated picture appears nowhere here and is free at either end by having no words on it - and an empty answer to either list therefore means the next group has to reach for a new picture, not that no group is possible.";
  "A SEATED GROUP COUNTS ON ITS OUTER MARKS, the same way a written word does, so a word drawn as several pictures makes only its first picture a beginning and only its last an ending. The pictures in the middle of a group are never next to a gap and stay free.";
  arguments_assert(arguments, 0);
  let testaments = ebible_book_testaments();
  let marks_seen = {};
  let marks = [];
  let ends_seen = {};
  let starts_seen = {};
  for (let testament of testaments) {
    let testament_name = property_get(testament, "name");
    let roots = bible_glyph_roots_testament_table(testament_name);
    for (let root of roots) {
      for (let word of root.words) {
        let glyph = property_get(word, "glyph");
        let names = bible_glyph_group_names(glyph);
        for (let name of names) {
          let known = property_exists(marks_seen, name);
          if (known) {
            continue;
          }
          property_set(marks_seen, name, true);
          list_add(marks, name);
        }
        let ending = list_last(names);
        property_set(ends_seen, ending, true);
        let beginning = list_first(names);
        property_set(starts_seen, beginning, true);
      }
    }
  }
  let never_ends = [];
  let never_starts = [];
  for (let mark of marks) {
    let ends_a_word = property_exists(ends_seen, mark);
    if (not(ends_a_word)) {
      list_add(never_ends, mark);
    }
    let starts_a_word = property_exists(starts_seen, mark);
    if (not(starts_a_word)) {
      list_add(never_starts, mark);
    }
  }
  let r = {
    marks_count: list_size(marks),
    never_ends,
    never_starts,
  };
  return r;
}
