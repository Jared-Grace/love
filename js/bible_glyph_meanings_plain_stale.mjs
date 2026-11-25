import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_meanings_plain } from "./bible_glyph_meanings_plain.mjs";
import { list_concat } from "./list_concat.mjs";
import { bible_glyph_roots_hebrew } from "./bible_glyph_roots_hebrew.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_meanings_plain_stale() {
  arguments_assert(arguments, 0);
  ("Every meaning the plain-words table rewrites that no root in either testament carries any more, with how many plain entries were walked.");
  ("A STALE ENTRY FAILS SILENTLY. The plain table is keyed by a root's meaning as the root tables spell it, so rewording that meaning in a root table makes its plain entry match nothing, and the card goes back to showing the old hard words. Nothing breaks and nothing looks different to anyone who does not tap that word, which is why this is asked rather than left to be noticed.");
  let plain = bible_glyph_meanings_plain();
  let a = bible_glyph_roots_hebrew();
  let b = bible_glyph_roots();
  let roots = list_concat(a, b);
  function lambda(root) {
    let r2 = root.gloss;
    return r2;
  }
  let glosses = list_map(roots, lambda);
  let keys = object_property_names(plain);
  let found = [];
  for (let key of keys) {
    if (list_includes_not(glosses, key)) {
      list_add(found, key);
    }
  }
  let walked = list_size(keys);
  let r = {
    walked,
    found,
  };
  return r;
}
