import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_characters_unused() {
  "Every picture the alphabet already holds that no seated word anywhere uses - the pool a word being moved off a shared picture can be given a picture from, at no cost at all.";
  "IT IS THE FIRST QUESTION A SPLIT ASKS AND THE CHEAPEST ANSWER TO IT. When two roots share a picture one of them has to go somewhere else, and there are three places to go: a picture already drawn and waiting here, a group of two pictures standing side by side, or a picture nobody has drawn yet and somebody has to make. Only the first costs nothing and risks nothing, so it is worth knowing whether it is empty before the other two are considered at all.";
  "A GROUP IS NOT FREE EVEN THOUGH IT BUYS NOTHING. Juxtaposition is the whole of the writing system, so a group of two ordinary pictures can be spelled by accident by two ordinary words standing next to each other, and that hazard is what the spellable reading exists to count. A picture out of this pool has no such hazard: it is one mark, and one mark cannot be spelled by anything but itself.";
  "BOTH TABLES ARE POOLED because a picture belongs to the scheme rather than to a testament. A picture free in Greek and seated in Hebrew is not free - the reader learning the pictures is one reader, and the same mark meaning two things across the two testaments is the very fault this is being asked in service of.";
  "A PICTURE INSIDE A GROUP COUNTS AS USED. A group is spelled out of ordinary pictures, so the marks it is built from are already carrying meaning on the page and are not waiting for anybody.";
  arguments_assert(arguments, 0);
  let testaments = ebible_book_testaments();
  let used = {};
  for (let testament of testaments) {
    let testament_name = property_get(testament, "name");
    let roots = bible_glyph_roots_testament_table(testament_name);
    for (let root of roots) {
      for (let word of root.words) {
        let glyph = property_get(word, "glyph");
        for (let name of bible_glyph_group_names(glyph)) {
          property_set(used, name, true);
        }
      }
    }
  }
  let unused = [];
  for (let character of bible_glyph_characters()) {
    let name = property_get(character, "name");
    let seated = property_exists(used, name);
    if (not(seated)) {
      list_add(unused, name);
    }
  }
  return unused;
}
