import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_roots_collisions(glyph_roots) {
  "$plain glyph_roots";
  "Every picture that has been given to more than one root, named with the roots sharing it.";
  arguments_assert(arguments, 1);
  ("A PICTURE STANDING FOR TWO ROOTS IS THE WORST FAULT THE ALPHABET CAN HAVE, worse than a picture nobody has drawn yet. A missing picture leaves a visible gap and a reader knows a word is being carried in English. A shared picture leaves no gap at all: two different words come out looking identical, the verse reads as though it says one of them, and nothing anywhere says which.");
  ("It is asked of the finished lookup rather than noticed while the lookup is built, because a collision is only a collision once every root has been seen. A root met early shares its picture with a root met late, and a check made as each root arrives would have to look forwards to know that.");
  ("A root repeating a picture it already carries is not a collision and must not be counted as one, so what arrives here is expected to hold each root once per picture. That thinning is done where the lookup is built, since that is the only place that knows a root is being met again.");
  let collisions = [];
  for (let glyph of object_property_names(glyph_roots)) {
    let sharers = property_get(glyph_roots, glyph);
    let count = list_size(sharers);
    let shared = greater_than(count, 1);
    if (shared) {
      list_add(collisions, {
        glyph,
        roots: sharers,
      });
    }
  }
  return collisions;
}
