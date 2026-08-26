import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_roots_glyph_sharers(roots) {
  "$plain roots";
  "the roots are one testament's seed table, a list of records. Nothing in them runs.";
  "Which roots each picture has been given to, keyed by the picture's name.";
  "A ROOT REPEATING A PICTURE IT ALREADY CARRIES IS NOT A COLLISION and must not be counted as one, so a root is written against a picture once however many of its words point there. The Hebrew covenant name is two Strong's numbers for one word, and without the thinning it would report itself as sharing its own tag with itself.";
  "This is asked of a whole table rather than noticed as each root arrives, because a picture is only shared once every root has been seen. A root met early shares with a root met late, and a check made on the way would have to look forwards to know it.";
  "It is a separate reading rather than a step inside the survey because two callers want it and only one of them wants the survey. The survey walks the table for three answers at once; a gate over the alphabet wants this one answer and has no business fetching a testament's glosses to get it.";
  let glyph_roots = {};
  for (let root of roots) {
    for (let word of root.words) {
      let glyph = word.glyph;
      let started = property_exists(glyph_roots, glyph);
      if (not(started)) {
        property_set(glyph_roots, glyph, []);
      }
      let sharers = property_get(glyph_roots, glyph);
      let fresh = list_includes_not(sharers, root.root);
      if (fresh) {
        list_add(sharers, root.root);
      }
    }
  }
  return glyph_roots;
}
