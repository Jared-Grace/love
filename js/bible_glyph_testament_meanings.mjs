import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { not_equal } from "./not_equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_glyph_joined_key } from "./bible_glyph_joined_key.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_testament_meanings(testament_name) {
  arguments_assert(arguments, 1);
  ("$plain testament_name");
  ("the name is a testament's own name. It names which tables to read and nothing that runs.");
  ("Every picture sequence one testament draws, keyed by the sequence, with the root it draws and what that root means. It is the table a page asks backwards: given the pictures a reader tapped, what do they say.");
  ("A SEQUENCE NAMES ONE ROOT IN ONE TESTAMENT, and the collision gates hold that, so asking from the pictures lands on exactly one root. Across the two testaments one sequence may draw two roots, which is why a testament is named.");
  ("WHETHER A WORD IS A NAME IS NOT ANSWERED HERE, because this table is keyed by pictures and a name may share its pictures with the common word it means; the word's own number answers it, through ",
    fn_name("bible_glyph_testament_names"),
    ".");
  ("Words of one root share their root's meaning, because a sibling's picture is the root's picture with a mark added and the mark is explained by its own name.");
  ("The Old Testament also carries the small joined Hebrew words, which have no Strong's number and so no root; they say the word they stand for and are keyed apart, by ",
    fn_name("bible_glyph_joined_key"),
    ", BECAUSE ONE PICTURE CAN MEAN TWO THINGS BY WHERE IT STANDS: the plus standing alone is the word also, and the plus joined to a word is and. Only the place in the group tells them apart, so the one who knows the place asks for the joined meaning.");
  let roots = bible_glyph_roots_testament_table(testament_name);
  let old_name = ebible_testament_old_name();
  let meanings = {};
  for (let root of roots) {
    for (let word of root.words) {
      if (equal(word.glyph, "")) {
        continue;
      }
      property_set(meanings, word.glyph, {
        root: root.root,
        gloss: root.gloss,
      });
    }
  }
  if (not_equal(testament_name, old_name)) {
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
  for (let name of object_property_names(parts)) {
    let joined = bible_glyph_joined_key(name);
    property_set(meanings, joined, {
      root: null,
      gloss: property_get(parts, name),
    });
  }
  return meanings;
}
