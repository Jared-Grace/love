import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
export async function bible_glyph_survey_sense_spread(testament_name) {
  "Gathers everything about one testament that has to be in hand before its words can be counted: the glosses recorded against each Strong's number, the roots the picture alphabet is built on, and which picture each word has been given.";
  "On the way it answers two questions about the alphabet itself, which are only askable once the whole table is laid out. A picture named in the table that the alphabet does not hold is a word nothing can yet be drawn for. A picture standing for more than one root is worse: two different words would come out looking the same, and the reader would have no way of telling which was meant.";
  "The two totals and the spread go back empty on purpose - a count of nothing and a list with nothing in it. Filling them means walking the glosses, which the caller does anyway for its own reasons, so what leaves here is the seed the caller adds into rather than an answer it failed to reach.";
  arguments_assert(arguments, 1);
  let glosses = await bible_strong_glosses(testament_name);
  let characters = bible_glyph_characters();
  let character_names = {};
  for (let character of characters) {
    property_set(character_names, character.name, true);
  }
  let roots = bible_glyph_roots_testament_table(testament_name);
  let glyph_roots = {};
  let mapped = {};
  let glyph_missing = [];
  for (let root of roots) {
    for (let word of root.words) {
      let glyph = word.glyph;
      for (let name of bible_glyph_group_names(glyph)) {
        let known = property_exists(character_names, name);
        if (not(known)) {
          list_add(glyph_missing, {
            root: root.root,
            strong: word.strong,
            glyph,
            name,
          });
        }
      }
      let started = property_exists(glyph_roots, glyph);
      if (not(started)) {
        property_set(glyph_roots, glyph, []);
      }
      let sharers = property_get(glyph_roots, glyph);
      let already = sharers.includes(root.root);
      if (not(already)) {
        list_add(sharers, root.root);
      }
      property_set(mapped, word.strong, {
        root: root.root,
        glyph,
      });
    }
  }
  let glyph_collisions = [];
  for (let glyph of object_property_names(glyph_roots)) {
    let sharers = property_get(glyph_roots, glyph);
    let shared = greater_than(sharers.length, 1);
    if (shared) {
      list_add(glyph_collisions, {
        glyph,
        roots: sharers,
      });
    }
  }
  let occurrences_total = 0;
  let occurrences_mapped = 0;
  let sense_spread = [];
  let r = {
    glosses,
    roots,
    mapped,
    glyph_missing,
    glyph_collisions,
    occurrences_total,
    occurrences_mapped,
    sense_spread,
  };
  return r;
}
