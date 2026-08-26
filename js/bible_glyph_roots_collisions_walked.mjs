import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_glyph_sharers } from "./bible_glyph_roots_glyph_sharers.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
import { bible_glyph_roots_collisions } from "./bible_glyph_roots_collisions.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_roots_collisions_walked() {
  arguments_assert(arguments, 0);
  ("Every picture in either testament's seed table that has been given to more than one root, with the roots that share it, and how many pictures were looked at to find them.");
  ("BOTH TABLES ARE ASKED AND THEIR ANSWERS ARE NEVER MIXED. A Strong's number belongs to one testament's numbering, so the two tables are two alphabets that happen to draw from one set of pictures, and a picture standing for a Hebrew root and a Greek root is not a collision at all - the two words are never on the same page. The walk is therefore one table at a time and the testament is carried out with each finding.");
  ("The count handed back is how many pictures were compared, not how many were wrong. On a clean table nothing is wrong, which is also what a walk that read no table would say, and this count is the part of the answer that falls when the reading stops reaching the tables.");
  ("It reads the tables and nothing else. The survey next door reaches this same answer on its way to another one, but it fetches a testament's whole gloss record first, which a question about the alphabet has no need of and no business waiting for.");
  let v = ebible_testament_old_name();
  let v2 = ebible_testament_new_name();
  let testament_names = [v, v2];
  let offenders = [];
  let walked = 0;
  for (let testament_name of testament_names) {
    let roots = bible_glyph_roots_testament_table(testament_name);
    let glyph_roots = bible_glyph_roots_glyph_sharers(roots);
    let glyph_names = object_property_names(glyph_roots);
    let right = list_size(glyph_names);
    walked = add(walked, right);
    let collisions = bible_glyph_roots_collisions(glyph_roots);
    for (let collision of collisions) {
      list_add(offenders, {
        testament_name,
        glyph: collision.glyph,
        roots: collision.roots,
      });
    }
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
