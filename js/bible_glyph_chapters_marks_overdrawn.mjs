import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_glyph_counts } from "./bible_glyph_chapter_glyph_counts.mjs";
import { bible_glyph_chapter_draft_glyph_counts } from "./bible_glyph_chapter_draft_glyph_counts.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapters_marks_overdrawn() {
  arguments_assert(arguments, 0);
  ("Every place an authored picture Bible chapter draws a mark MORE often than the root table seats it in that chapter, which is a mark standing on a word the table never gave it.");
  ("DRAWING FEWER IS ALLOWED AND DRAWING MORE IS NOT, and the asymmetry is the whole reading. An author may always leave a seated word in plain English - the twenty third psalm did exactly that with its second turn-back, on purpose and with the reason written down - so a chapter under the table's count has made a judgment. A chapter OVER the table's count has drawn a picture on something the numbers underneath it do not support, and there is no judgment that produces that.");
  ("THE CASE THIS EXISTS FOR IS A MARK MEETING ITS OWN PICTURE. The flame is seated on God and not on fire, the breath on Spirit and not on wind, the star on glory and not on star - so a letter mentioning eternal fire, or clouds carried by the wind, or wandering stars, looks to an author like three verses with an obvious picture missing. Drawing them would teach a reader that the flame means flame, which silently unteaches every page where it means God. Nothing before this could tell that a chapter had done it.");
  ("IT COMPARES COUNTS AND NEVER POSITIONS, which bounds what it can promise. A chapter that drew the right number of flames on the wrong words passes, because the authored chapter is readable English and the interlinear is word-for-word Greek and there is no honest way to line one up against the other. What it does catch completely is a mark drawn where the table seats none at all, which is the only shape the fire-on-fire mistake can take.");
  ("It walks the chapters rather than taking a list, so it cannot fall behind the ones that have been written.");
  let chapters = bible_glyph_chapters();
  let overdrawn = [];
  for (let chapter of chapters) {
    let chapter_code = chapter.chapter_code;
    let drawn = bible_glyph_chapter_glyph_counts(chapter_code);
    let seated = await bible_glyph_chapter_draft_glyph_counts(chapter_code);
    for (let glyph of object_property_names(drawn)) {
      let drew = property_get(drawn, glyph);
      let found = property_get_or_null(seated, glyph);
      let seats = 0;
      let b = null_is(found);
      let known = not(b);
      if (known) {
        seats = found;
      }
      let over = greater_than(drew, seats);
      if (over) {
        list_add(overdrawn, {
          chapter_code,
          glyph,
          drew,
          seats,
        });
      }
    }
  }
  return overdrawn;
}
