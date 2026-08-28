import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_groups_vocabulary } from "./bible_glyph_groups_vocabulary.mjs";
import { bible_glyph_artwork_absent } from "./bible_glyph_artwork_absent.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_groups_marks_artwork_absent() {
  "Every half of every group of pictures that the artwork set has no picture for, with how many halves were looked at to find them.";
  ("A HALF WITHOUT A PICTURE BREAKS THE ONE THING A GROUP IS MADE OF. A group is two pictures touching, and touching is the entire reason a reader takes them as one word. ",
    fn_name("bible_glyph_artwork_absent"),
    " records the glyphs the artwork set cannot draw; those fall back to whatever the reader's own device has - the font's emoji, or, for the two this Bible has no character for at all, the English word spelled out in letters.");
  ("SO A GROUP WITH AN UNDRAWN HALF IS NOT A WORD ANY MORE. Drawn beside a picture, an emoji from the reader's font is a different hand, a different size and a different palette, and the pair reads as two things that happened to be adjacent rather than as one sign. Where the fallback is letters it is worse than that: a picture touching a word reads as a picture followed by a word, which is exactly what it is not.");
  ("IT IS A DIFFERENT QUESTION FROM WHETHER EVERY GLYPH WAS DECIDED ABOUT, and both are worth asking. Deciding that the set has no picture for a glyph is a legitimate answer for a glyph standing on its own - it costs that one word a drawn picture and nothing else. It is not a legitimate answer for a glyph that also stands inside a group, because there it costs the group its meaning.");
  ("IT COUNTS THE HALVES IT LOOKED AT beside the offenders, so an empty answer can be told from a walk that reached no groups. This Bible seats few groups, so the answer is short by nature, and a short answer and no answer at all look identical without the count.");
  arguments_assert(arguments, 0);
  let vocabulary = bible_glyph_groups_vocabulary();
  let absent = bible_glyph_artwork_absent();
  let no_picture = {};
  for (let entry of absent) {
    property_set(no_picture, entry.glyph, entry.because);
  }
  let halves_walked = 0;
  let offenders = [];
  for (let group of vocabulary) {
    let names = bible_glyph_group_names(group);
    for (let glyph_name of names) {
      halves_walked = halves_walked + 1;
      let missing = property_exists(no_picture, glyph_name);
      if (missing) {
        list_add(offenders, {
          group,
          glyph: glyph_name,
        });
      }
    }
  }
  let r = {
    groups: list_size(vocabulary),
    halves_walked,
    offenders,
  };
  return r;
}
