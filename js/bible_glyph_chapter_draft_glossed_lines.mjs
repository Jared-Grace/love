import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { bible_glyph_draft_gap } from "./bible_glyph_draft_gap.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapter_draft_glossed_lines(
  chapter_code,
  testament_name,
  traditions,
) {
  "A chapter drawn straight from the seed table, one numbered line per verse, with every undrawn word showing the English the interlinear gives it instead of a gap.";
  "$plain chapter_code";
  "$plain testament_name";
  "$plain traditions";
  "IT IS THE TWIN OF THE DOTTED DRAFT AND IT ANSWERS A DIFFERENT QUESTION. The dotted one asks whether the drawn words carry a sentence, so it hides the English on purpose - a gap has to look like a gap or the coverage reads better than it is. This one is for the person about to author the chapter, who needs to see which English word each picture is standing on, and a dot is exactly the thing they cannot work from.";
  "IT WAS BUILT BECAUSE AUTHORING WAS BEING DONE OUT OF A SIXTY KILOBYTE FILE. The word by word draft carries the Hebrew, the gloss, the number and the glyph for every word of the chapter, which is everything and is why it is unreadable; what an author actually needs is one line per verse that they can read as a sentence and see the pictures inside. That is this, and it is the same two readings the dotted twin already does, joined differently.";
  "A WORD WITH NO GLOSS FALLS BACK TO THE GAP MARK rather than vanishing, because a word the interlinear leaves unglossed is still a word of the verse and closing the line up over it would quietly shorten the sentence. The dash the interlinear writes where English has no word for something is treated the same way, since printing a bare dash in the middle of a line reads as punctuation the verse does not have.";
  "This is a DRAFT and never scripture, exactly as the dotted twin says of itself. It seats whatever glyph the table happens to carry under each number and has no view about the sentence, and the interlinear's gloss is one place's turn of phrase rather than a translation. An authored chapter is a person's judgment and this is a lookup.";
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let lookup = bible_glyph_characters_lookup(traditions);
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let gap = bible_glyph_draft_gap();
  let lines = [];
  let verse_number = 0;
  for (let verse of verses) {
    verse_number = add(verse_number, 1);
    let pieces = [];
    for (let word of verse.words) {
      let glyph = property_get_or_null(drawn, word.strong);
      let undrawn = null_is(glyph);
      if (not(undrawn)) {
        let character = property_get(lookup, glyph);
        list_add(pieces, character);
        continue;
      }
      let gloss = word.gloss;
      let dash = equal(gloss, "-");
      let empty = not(gloss);
      let unsaid = dash || empty;
      if (unsaid) {
        list_add(pieces, gap);
        continue;
      }
      list_add(pieces, gloss);
    }
    let joined = list_join_space(pieces);
    let line = verse_number + " " + joined;
    list_add(lines, line);
  }
  return lines;
}
