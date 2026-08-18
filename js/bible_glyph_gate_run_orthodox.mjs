import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_characters_orthodox } from "./bible_glyph_characters_orthodox.mjs";
import { bible_glyph_gate_run_chapter } from "./bible_glyph_gate_run_chapter.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_gate_run_orthodox(characters) {
  arguments_assert(arguments, 1);
  let checked = bible_glyph_gate_run_chapter(characters);
  let known = property_get(checked, "known");
  let walked = property_get(checked, "walked");
  let orthodox = bible_glyph_characters_orthodox();
  let r = {
    known,
    orthodox,
    walked,
  };
  return r;
}
