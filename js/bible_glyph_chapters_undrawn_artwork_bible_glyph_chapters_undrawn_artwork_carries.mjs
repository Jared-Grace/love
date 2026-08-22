import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_undrawn_artwork_bible_glyph_chapters_undrawn_artwork_stems } from "./bible_glyph_chapters_undrawn_artwork_bible_glyph_chapters_undrawn_artwork_stems.mjs";
export function bible_glyph_chapters_undrawn_artwork_bible_glyph_chapters_undrawn_artwork_carries(
  name_words,
  words,
) {
  arguments_assert(arguments, 2);
  ("whether one of the set's names carries any of the words being looked for.");
  ("IT MATCHES WORD AGAINST WORD AND NEVER INTO THE MIDDLE OF ONE. The first version asked whether the name held the letters anywhere, and the word for righteousness - which the interlinear prints as and right - came back with copyright and with a bright button. A syllable landing inside an unrelated name is not a lead, it is noise wearing the shape of one, and it arrives in bulk: that one word matched thirty-four names.");
  ("A PREFIX STILL COUNTS, because the interlinear's English and the set's names inflect differently - commandments against command, keeping against keep - and demanding the two spell the same word throws those away. The shorter of the pair has to reach four letters for the same reason the grammar was dropped upstairs.");
  for (let word of words) {
    for (let name_word of name_words) {
      let carries =
        bible_glyph_chapters_undrawn_artwork_bible_glyph_chapters_undrawn_artwork_stems(
          word,
          name_word,
        );
      if (carries) {
        let v = true;
        return v;
      }
    }
  }
  let v2 = false;
  return v2;
}
