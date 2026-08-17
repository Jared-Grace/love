import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_gate_run_chapter } from "./bible_glyph_gate_run_chapter.mjs";
import { bible_glyph_characters_orthodox } from "./bible_glyph_characters_orthodox.mjs";
export function bible_glyph_gate_run_orthodox(characters) {
  arguments_assert(arguments, 1);
  let known = bible_glyph_gate_run_chapter(characters);
  let orthodox = bible_glyph_characters_orthodox();
  let r = {
    known,
    orthodox,
  };
  return r;
}
