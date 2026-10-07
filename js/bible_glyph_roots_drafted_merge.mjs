import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export function bible_glyph_roots_drafted_merge(roots, drafted) {
  arguments_assert(arguments, 2);
  ("$plain roots");
  ("the hand-written table, root rows each holding their words. It is read and not changed.");
  ("$plain drafted");
  ("a flat list of { strong, root, glyph, gloss }, one per word seated in bulk. It is read and not changed.");
  ("The table with every drafted word filed under its root: into the hand-written row of that name where one exists, otherwise into a new row made the first time the root is met.");
  ("A DRAFTED WORD JOINS AN EXISTING ROW RATHER THAN STARTING A SECOND ONE OF THE SAME NAME, because a root is one word family and two rows spelling it would be read as two families by anything that groups by row, and a picture shared inside one family is a decision while the same picture across two families is a collision.");
  ("THE HAND-WRITTEN ROWS ARE COPIED, NEVER CHANGED IN PLACE, so a caller holding the rows it was given is not surprised by words arriving in them later.");
  let merged = [];
  let by_root = {};
  for (let row of roots) {
    let copy = {
      root: row.root,
      gloss: row.gloss,
      words: [...row.words],
    };
    list_add(merged, copy);
    let value = property_get_or_null(by_root, row.root);
    if (null_is(value)) {
      property_set(by_root, row.root, copy);
    }
  }
  for (let word of drafted) {
    let row = property_get_or_null(by_root, word.root);
    if (null_is(row)) {
      row = {
        root: word.root,
        gloss: word.gloss,
        words: [],
      };
      list_add(merged, row);
      property_set(by_root, word.root, row);
    }
    list_add(row.words, {
      strong: word.strong,
      glyph: word.glyph,
    });
  }
  return merged;
}
