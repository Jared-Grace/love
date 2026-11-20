import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_reasons } from "./bible_glyph_reasons.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { add } from "./add.mjs";
import { bible_glyph_chapter_glyph_names } from "./bible_glyph_chapter_glyph_names.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_reasons_unwritten() {
  arguments_assert(arguments, 0);
  ("Every picture name some authored picture Bible chapter draws that has no reason written for it, with how many chapters were walked.");
  ("A PICTURE WITH NO REASON STILL DRAWS, which is why nothing else notices. The card a reader taps lists it with the words not explained yet in faint text, so the page looks finished to anyone who does not tap that one word. Every name a chapter draws is read through the parser, never the shorthand, so this asks exactly the names the card is handed.");
  let reasons = bible_glyph_reasons();
  let chapters = bible_glyph_chapters();
  let walked = 0;
  let found = [];
  for (let chapter of chapters) {
    walked = add(walked, 1);
    let names = bible_glyph_chapter_glyph_names(chapter.chapter_code);
    for (let name of names) {
      let b = property_exists(reasons, name);
      let unwritten = not(b);
      if (unwritten) {
        if (list_includes_not(found, name)) {
          list_add(found, name);
        }
      }
    }
  }
  let r = {
    walked,
    found,
  };
  return r;
}
