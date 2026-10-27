import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { bible_glyph_roots_hebrew } from "./bible_glyph_roots_hebrew.mjs";
import { list_includes } from "./list_includes.mjs";
import { bible_glyph_roots_split_pairs } from "./bible_glyph_roots_split_pairs.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_roots_split_families() {
  arguments_assert(arguments, 0);
  ("For every picture two roots used to share, every other picture those two roots are drawn by now and no other root is, keyed by the old picture's name.");
  ("A ROOT IS NAMED BY ITS WORD, AND TWO HEBREW ROOTS ARE BOTH WRITTEN al - the one that means not, and the one that means upon. A pair that wrote the bare name took both, and the first reading built on it offered the upward pointer as what a no entry sign on the word not should become. So a name may carry the start of its gloss after a colon, and then only the root whose gloss starts that way answers to it. A name that still answers to more than one root, or to none, is refused rather than guessed at.");
  ("A PICTURE ANOTHER ROOT ALSO DRAWS IS LEFT OUT, because a mark becoming it would be a guess about which root the page meant. Naming the right al was not enough: the root for not itself files words drawn by the upward pointer, the same picture the root for upon is drawn by, and a verse seating upon and drawing a no entry sign would have had the sign turned into a pointer.");
  let roots = [...bible_glyph_roots(), ...bible_glyph_roots_hebrew()];
  function root_find(written) {
    let [name, gloss_start] = written.split(":");
    function lambda(root) {
      let eq = equal(root.root, name);
      return eq;
    }
    let found = roots.filter(lambda);
    if (not_equal(gloss_start, undefined)) {
      function lambda2(root) {
        let r = root.gloss.startsWith(gloss_start);
        return r;
      }
      found = found.filter(lambda2);
    }
    if (not_equal(found.length, 1)) {
      let json = json_to({
        written,
        found: found.length,
        hint: "a split pair names a root that is not exactly one root - add the start of its gloss after a colon",
      });
      throw new Error(json);
    }
    let root = found[0];
    return root;
  }
  function drawn_elsewhere(glyph, sharers) {
    for (let root of roots) {
      if (list_includes(sharers, root)) {
        continue;
      }
      for (let word of root.words) {
        if (equal(word.glyph, glyph)) {
          return true;
        }
      }
    }
    return false;
  }
  let families = {};
  for (let [glyph, first, second] of bible_glyph_roots_split_pairs()) {
    let b = property_exists(families, glyph);
    if (not(b)) {
      property_set(families, glyph, []);
    }
    let family = property_get(families, glyph);
    let v = root_find(first);
    let v2 = root_find(second);
    let sharers = [v, v2];
    for (let root of sharers) {
      for (let word of root.words) {
        let fresh =
          not_equal(word.glyph, glyph) &&
          not(list_includes(family, word.glyph)) &&
          not(drawn_elsewhere(word.glyph, sharers));
        if (fresh) {
          list_add(family, word.glyph);
        }
      }
    }
  }
  return families;
}
