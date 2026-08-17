import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_gate_run_referent } from "./bible_glyph_gate_run_referent.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { property_exists } from "./property_exists.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_is } from "./list_is.mjs";
import { not } from "./not.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_glyph_gate_run_chapter(characters) {
  arguments_assert(arguments, 1);
  let known = bible_glyph_gate_run_referent(characters);
  let chapters = bible_glyph_chapters();
  for (let chapter of chapters) {
    let parsed = bible_glyph_chapter(chapter.chapter_code);
    let referenced = property_exists(parsed, "reference");
    assert_json(referenced, {
      chapter_code: chapter.chapter_code,
      hint: "a chapter says where it is in words as well as in its code, because the code is what a machine addresses it by and the reference is what a reader is shown - add a reference beside the chapter code",
    });
    for (let verse of parsed.verses) {
      for (let word of verse.words) {
        let group = list_is(word);
        if (not(group)) {
          continue;
        }
        for (let piece of word) {
          let piece_group = list_is(piece);
          if (not(piece_group)) {
            continue;
          }
          for (let name of piece) {
            let drawn = property_exists(known, name);
            let f_name = fn_name("bible_glyph_characters");
            assert_json(drawn, {
              chapter_code: chapter.chapter_code,
              verse_number: verse.verse_number,
              name,
              hint: text_combine_multiple([
                "an authored verse names a glyph the vocabulary does not carry, so it draws as its own name in angle brackets - add it to ",
                f_name,
                " or fix the spelling",
              ]),
            });
          }
        }
      }
    }
  }
  return known;
}
