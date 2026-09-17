import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_parts_hebrew_drawn } from "./bible_glyph_parts_hebrew_drawn.mjs";
import { object_merge } from "./object_merge.mjs";
export function bible_glyph_testament_drawn(testament_name) {
  arguments_assert(arguments, 1);
  ("$plain testament_name");
  ("the name is a testament's own name. It names which tables to read and nothing that runs.");
  ("Every picture one testament can draw, keyed by what a kept word names: a Strong's number, or for Hebrew also the parsing code of a joined small word.");
  ("THE TWO KINDS OF KEY CANNOT MEET. A Strong's number is digits and a parsing code never is, so laying the joined-word table over the root table adds keys and never replaces one.");
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let old_name = ebible_testament_old_name();
  if (equal(testament_name, old_name)) {
    let parts = bible_glyph_parts_hebrew_drawn();
    object_merge(drawn, parts);
  }
  return drawn;
}
