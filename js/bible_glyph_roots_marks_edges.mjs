import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
export function bible_glyph_roots_marks_edges() {
  "Every picture standing at the end or at the start of a word the root tables seat, named once for each edge it stands at rather than once for each picture.";
  "IT IS OCCURRENCES AND NOT A SET, on purpose. How many edges were looked at is the only thing that can tell a real answer from a walk that stopped reaching its sources, and a set throws that away - the same picture at a thousand edges and at one collapse to the same single name. Whoever wants the set can make it from this in a line; nobody can get the count back out of a set.";
  "BOTH TESTAMENTS ARE POOLED because a picture belongs to the writing system rather than to a table. A picture free at the end of every Greek word is not free at all if a Hebrew word ends with it, and a reader looking at a page has no way of knowing which table put the picture there.";
  "A SEATED GROUP COUNTS ON ITS OUTER MARKS. A word seated on two pictures side by side reaches the page with the first at its start and the last at its end, so those are the two edges it makes, and a picture buried in the middle of a longer group makes no edge at all from that seating.";
  arguments_assert(arguments, 0);
  let edges = [];
  let testaments = ebible_book_testaments();
  for (let testament of testaments) {
    let testament_name = property_get(testament, "name");
    let roots = bible_glyph_roots_testament_table(testament_name);
    for (let root of roots) {
      let words = property_get(root, "words");
      for (let word of words) {
        let glyph = property_get(word, "glyph");
        let names = bible_glyph_group_names(glyph);
        let ending = list_last(names);
        list_add(edges, ending);
        let beginning = list_first(names);
        list_add(edges, beginning);
      }
    }
  }
  return edges;
}
