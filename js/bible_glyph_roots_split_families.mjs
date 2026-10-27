import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { bible_glyph_roots_hebrew } from "./bible_glyph_roots_hebrew.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { json_to } from "./json_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { bible_glyph_roots_split_pairs } from "./bible_glyph_roots_split_pairs.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function bible_glyph_roots_split_families() {
  arguments_assert(arguments, 0);
  ("For every picture two roots used to share, every other picture the roots that shared it are drawn by now and no other root is, keyed by the old picture's name.");
  ("A ROOT IS NAMED BY ITS WORD, AND TWO HEBREW ROOTS ARE BOTH WRITTEN al - the one that means not, and the one that means upon. A pair that wrote the bare name took both, and the first reading built on it offered the upward pointer as what a no entry sign on the word not should become. So a name may carry the start of its gloss after a colon, and then only the root whose gloss starts that way answers to it. A name that still answers to more than one root, or to none, is refused rather than guessed at.");
  let greek = bible_glyph_roots();
  let hebrew = bible_glyph_roots_hebrew();
  ("A PICTURE ANOTHER ROOT ALSO DRAWS IS LEFT OUT, because a mark becoming it would be a guess about which root the page meant. Naming the right al was not enough: the root for not itself files words drawn by the upward pointer, the same picture the root for upon is drawn by, and a verse seating upon and drawing a no entry sign would have had the sign turned into a pointer.");
  let roots = [...greek, ...hebrew];
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
  ("ONLY A ROOT OF THE SAME LANGUAGE COUNTS AS ANOTHER ROOT DRAWING IT. A Hebrew verse seats only Hebrew roots, so a Greek root sharing a picture cannot be what a Hebrew page meant. Asked across both tables, the Hebrew word for word was refused its own picture, the voice, because a Greek root draws the voice too, and every speech mark it left behind stayed.");
  function drawn_elsewhere(glyph, sharers, own) {
    let language = list_includes(greek, own) ? greek : hebrew;
    for (let root of language) {
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
  ("EVERY ROOT OF EVERY PAIR UNDER ONE OLD PICTURE COUNTS AS ITS OWN, NOT ONLY THE TWO OF ONE PAIR. The Greek and the Hebrew word for commandment are both drawn by the scroll with an exclamation mark, on purpose, and each sat in a different pair under the scroll. Asked pair by pair, each was another root drawing the other's picture, so the picture was left out of both and not one scroll mark could be redrawn.");
  let sharers_by_glyph = {};
  for (let [glyph, first, second] of bible_glyph_roots_split_pairs()) {
    let b = property_exists(sharers_by_glyph, glyph);
    if (not(b)) {
      property_set(sharers_by_glyph, glyph, []);
    }
    let found_sharers = property_get(sharers_by_glyph, glyph);
    let item = root_find(first);
    list_add(found_sharers, item);
    let item2 = root_find(second);
    list_add(found_sharers, item2);
  }
  let families = {};
  for (let glyph of object_property_names(sharers_by_glyph)) {
    let family = [];
    property_set(families, glyph, family);
    let sharers = property_get(sharers_by_glyph, glyph);
    for (let root of sharers) {
      for (let word of root.words) {
        let fresh =
          not_equal(word.glyph, glyph) &&
          not(list_includes(family, word.glyph)) &&
          not(drawn_elsewhere(word.glyph, sharers, root));
        if (fresh) {
          list_add(family, word.glyph);
        }
      }
    }
  }
  return families;
}
