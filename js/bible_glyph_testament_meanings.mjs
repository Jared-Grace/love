import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { property_set } from "./property_set.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_testament_meanings(testament_name) {
  arguments_assert(arguments, 1);
  ("$plain testament_name");
  ("the name is a testament's own name. It names which tables to read and nothing that runs.");
  ("Every picture sequence one testament draws, keyed by the sequence, with the root it draws and what that root means. It is the table a page asks backwards: given the pictures a reader tapped, what do they say.");
  ("A SEQUENCE NAMES ONE ROOT IN ONE TESTAMENT, and the collision gates hold that, so asking from the pictures lands on exactly one root. Across the two testaments one sequence may draw two roots, which is why a testament is named.");
  ("Words of one root share their root's meaning, because a sibling's picture is the root's picture with a mark added and the mark is explained by its own name.");
  ("The Old Testament also carries the small joined Hebrew words, which have no Strong's number and so no root; they are keyed by their one picture and say the word they stand for. A root seated on the same lone picture wins, because it was seated on purpose.");
  let roots = bible_glyph_roots_testament_table(testament_name);
  let meanings = {};
  for (let root of roots) {
    for (let word of root.words) {
      if (word.glyph === "") {
        continue;
      }
      property_set(meanings, word.glyph, {
        root: root.root,
        gloss: root.gloss,
      });
    }
  }
  let old_name = ebible_testament_old_name();
  if (testament_name !== old_name) {
    return meanings;
  }
  let parts = {
    plus: "and",
    tray_in: "in",
    tray_out: "from",
    toward: "to; for",
    likeness: "like; as",
    pin: "the",
    pointing_back: "he; she; it; they",
    me: "I; me; my; we; us; our",
    you: "you; your",
  };
  for (let name of Object.keys(parts)) {
    if (property_exists(meanings, name)) {
      continue;
    }
    property_set(meanings, name, {
      root: null,
      gloss: property_get(parts, name),
    });
  }
  return meanings;
}
