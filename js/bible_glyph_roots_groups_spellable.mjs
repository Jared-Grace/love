import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { bible_glyph_groups_vocabulary } from "./bible_glyph_groups_vocabulary.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_roots_groups_spellable() {
  "For each group of pictures the tables give a meaning to, the seated words that end in its first picture and the seated words that begin with its second - which together are every way that group can be spelled by standing two ordinary words side by side.";
  "IT ASKS THE QUESTION BEFORE A CHAPTER EXISTS RATHER THAN AFTER. The reading over the written chapters says how many of these misreadings have already been authored, which is the right question to gate on and the wrong one to author by: it can only ever answer about wording that is already committed, and by then the repair costs a rewrite. This answers what the SEATING makes possible, so it is knowable the day a group is seated and long before anybody writes the verse that trips it.";
  "IT IS NOT A FAULT LIST AND MUST NOT BE READ AS ONE. Every pair here is two correct words correctly seated; nothing is wrong with any of them. What the answer says is where an author has to keep two words apart, or reach for a different wording, and that is a thing to know rather than a thing to fix.";
  "IT COUNTS BY TESTAMENT because a Strong's number belongs to one, so two words that could stand side by side have to come from the same table. Counting across the two would invent hazards nobody can write, and inventing hazards is how a warning list gets ignored.";
  "A SEATED GROUP COUNTS ON ITS OUTER MARKS, the same way a written word does. A word drawn as several pictures ends in its last one and begins with its first, and the pictures in the middle are not next to the gap at all - so a group seated on a word can spell a further group with its neighbour just as a single picture can.";
  arguments_assert(arguments, 0);
  let vocabulary = bible_glyph_groups_vocabulary();
  let testaments = ebible_book_testaments();
  let rows = [];
  for (let group of vocabulary) {
    let parts = bible_glyph_group_names(group);
    let opening = list_first(parts);
    let closing = list_last(parts);
    for (let testament of testaments) {
      let testament_name = property_get(testament, "name");
      let roots = bible_glyph_roots_testament_table(testament_name);
      let before = [];
      let after = [];
      for (let root of roots) {
        for (let word of root.words) {
          let glyph = property_get(word, "glyph");
          let names = bible_glyph_group_names(glyph);
          let seated = {
            root: property_get(root, "root"),
            strong: property_get(word, "strong"),
            glyph,
          };
          let left = list_last(names);
          let ends_it = equal(left, opening);
          if (ends_it) {
            list_add(before, seated);
          }
          let left2 = list_first(names);
          let starts_it = equal(left2, closing);
          if (starts_it) {
            list_add(after, seated);
          }
        }
      }
      let neither = list_empty_is(before) || list_empty_is(after);
      if (neither) {
        continue;
      }
      let left3 = list_size(before);
      let right = list_size(after);
      let ways = multiply(left3, right);
      list_add(rows, {
        group,
        testament_name,
        ways,
        before,
        after,
      });
    }
  }
  return rows;
}
