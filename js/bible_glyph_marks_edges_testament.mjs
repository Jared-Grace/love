import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
export function bible_glyph_marks_edges_testament(testament_name) {
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names which table to read and nothing that runs.";
  "For one testament, how many seated words END with each picture and how many BEGIN with each picture - the two tallies that decide whether a proposed group of two pictures could be spelled by accident.";
  "A GROUP HAS NO MARK OF ITS OWN, so it is spelled whenever a word ending in its first picture stands next to a word beginning with its second. Multiplying the two tallies gives the number of ways that can happen, and a nought on either side means it cannot happen at all. That is the whole test, and it is worth having before a group is seated rather than after somebody writes the verse.";
  "IT IS ASKED OF ONE TESTAMENT because a Strong's number belongs to one, so two words can only stand side by side if they come from the same table. Pooling the two would count pairs nobody can write, and a warning list full of impossible warnings is a warning list nobody reads. That is the opposite of how the pool for CHOOSING a free picture is asked, and deliberately so: choosing has to hold on both sides, measuring has to be true of one.";
  "A WORD DRAWN AS SEVERAL PICTURES COUNTS ON ITS OUTER MARKS ONLY. The pictures in the middle of a group never touch the gap between words, so nothing can be put in front of them or behind them.";
  arguments_assert(arguments, 1);
  let roots = bible_glyph_roots_testament_table(testament_name);
  let ends = {};
  let starts = {};
  for (let root of roots) {
    for (let word of root.words) {
      let glyph = property_get(word, "glyph");
      let names = bible_glyph_group_names(glyph);
      let key = list_last(names);
      property_count_add(ends, key, 1);
      let key2 = list_first(names);
      property_count_add(starts, key2, 1);
    }
  }
  let r = {
    ends,
    starts,
  };
  return r;
}
