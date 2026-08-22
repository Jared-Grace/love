import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function bible_glyph_groups_vocabulary() {
  "Every group of pictures the glyph tables seat a word under, written the way the tables write one, with each group named once however many words are seated on it.";
  "A GROUP IS THE ONLY SHAPE A PAIR OF NEIGHBOURING WORDS CAN BE MISREAD AS, and nothing until now could say what the groups were. Two pictures drawn side by side are one word when they touch and two words when they do not; a reader who misjudges that gap reads a group. Whether that misreading spells anything is a question about this list, so this list had to exist before the question could be asked.";
  "IT IS DERIVED AND NEVER TYPED. A hand-written copy of the groups would be right on the day it was written and silently wrong the first time somebody seated a word on a new pair - and wrong in the direction that reports no problem, because a group missing from the list is a misreading nobody checks for.";
  "IT WALKS THE TESTAMENTS RATHER THAN NAMING THE TABLES, the same way the characters check does, so a third table added later is covered without this being edited.";
  "A FIELD NAMING ONE PICTURE IS NOT A GROUP and is skipped. Almost every seated word is one picture, so the answer here is short by nature - and a short answer is the honest one rather than a sign the walk went wrong.";
  "THE NAMES ARE JOINED BACK UP RATHER THAN THE FIELD BEING HANDED ON AS TYPED, because a table is edited by a person and a space after a plus is a typing artifact. A caller comparing a group against two marks it worked out for itself would miss on that space alone, and miss silently.";
  let testaments = ebible_book_testaments();
  let seen = {};
  let groups = [];
  for (let testament of testaments) {
    let testament_name = property_get(testament, "name");
    let roots = bible_glyph_roots_testament_table(testament_name);
    for (let root of roots) {
      for (let word of root.words) {
        let glyph = property_get(word, "glyph");
        let names = bible_glyph_group_names(glyph);
        let single = less_than(list_size(names), 2);
        if (single) {
          continue;
        }
        let joined = names.join("+");
        let already = property_exists(seen, joined);
        if (already) {
          continue;
        }
        property_set(seen, joined, true);
        list_add(groups, joined);
      }
    }
  }
  return groups;
}
