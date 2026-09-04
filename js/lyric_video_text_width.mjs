import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_letter_widths } from "./lyric_video_letter_widths.mjs";
import { text_split } from "./text_split.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
export function lyric_video_text_width(text, font_size) {
  "$plain text";
  "$plain font_size";
  "How many pixels across a run of words takes when it is drawn at a given lettering size.";
  "★ IT ADDS UP THE ROOM EACH LETTER TAKES, WHICH IS THE ONLY THING THAT DECIDES WHERE A LINE BREAKS. A count of letters answers the same question by supposing every letter is the same width, and in this typeface the widest is more than four times the narrowest, so that supposition is wrong by a factor of four in the worst case and by about a quarter in ordinary prose. That quarter is exactly the room a screen was overrunning by.";
  "★ NOTHING IS ADDED FOR THE BLACK RIM AROUND THE LETTERS. A rim grows the ink but not the room the letter takes, and it is the room that the line breaking is done by, so counting it would break lines early for no reason.";
  arguments_assert(arguments, 2);
  let widths = lyric_video_letter_widths();
  let widest = 733;
  let letters = text_split(text, "");
  let per_mille = 0;
  function letter_each(letter) {
    let own = property_get_or(widths, letter, widest);
    per_mille = add(per_mille, own);
  }
  each(letters, letter_each);
  let pixels = multiply_divide(per_mille, font_size, 1000);
  return pixels;
}
