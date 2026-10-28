import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { json_to } from "./json_to.mjs";
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
  ("A DRAFTED WORD MAY NAME ITS ROW AS name:gloss_start, because two hand-written rows can share a name and the first one would take every word spelled that way. The Hebrew ayin is both there is no and the eye, and the Aramaic eye, Enan and Anim were filed under there is no; split readings then saw the eye drawn by a second family and would not hand it back to the marks the eye root had worn. The colon form answers only to the one row of that name whose gloss starts that way, and is refused when that is not exactly one row.");
  function row_named(written) {
    let [name, gloss_start] = written.split(":");
    if (equal(gloss_start, undefined)) {
      let found_by_name = property_get_or_null(by_root, name);
      return found_by_name;
    }
    function lambda(row) {
      let b = equal(row.root, name) && row.gloss.startsWith(gloss_start);
      return b;
    }
    let found = merged.filter(lambda);
    if (not_equal(found.length, 1)) {
      let json = json_to({
        written,
        found: found.length,
        hint: "a drafted word names a root and gloss start that is not exactly one row",
      });
      throw new Error(json);
    }
    let chosen = found[0];
    return chosen;
  }
  for (let word of drafted) {
    let row = row_named(word.root);
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
