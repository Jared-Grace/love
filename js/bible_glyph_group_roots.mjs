import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_group_roots(group) {
  "$plain group";
  "the group names a pair of pictures the way a table writes one, with a plus between the two names. It is text to compare against and nothing that runs.";
  "Every word the glyph tables seat under one named group of pictures, with the root it belongs to, what that root means and which testament's table it came from.";
  "IT ANSWERS WHAT A MISREADING WOULD SAY. A reader who joins two neighbouring words reads a group, and the only thing that makes that worth reporting is that the group means something; this is where the meaning comes from. Without it a report can say the shape is spellable and cannot say what it spells, which is the half of the answer a person needs in order to judge whether the join matters.";
  "IT WALKS THE TESTAMENTS RATHER THAN NAMING THE TABLES, the same way the vocabulary reading does, so a third table added later is covered without this being edited.";
  "AN EMPTY ANSWER IS A REAL ANSWER and not an error, because a caller may ask about a pair of pictures no word is seated on - that is exactly the harmless case, and saying so plainly is cheaper than making every caller catch a throw to find it out.";
  arguments_assert(arguments, 1);
  let testaments = ebible_book_testaments();
  let found = [];
  for (let testament of testaments) {
    let testament_name = property_get(testament, "name");
    let roots = bible_glyph_roots_testament_table(testament_name);
    for (let root of roots) {
      let root_name = property_get(root, "root");
      let gloss = property_get(root, "gloss");
      let words = property_get(root, "words");
      for (let word of words) {
        let here = property_equals(word, "glyph", group);
        if (not(here)) {
          continue;
        }
        let strong = property_get(word, "strong");
        list_add(found, {
          root: root_name,
          gloss,
          strong,
          testament_name,
        });
      }
    }
  }
  return found;
}
