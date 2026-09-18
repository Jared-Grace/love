import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { bible_glyph_chapters_verse_glyph_letters_draw } from "./bible_glyph_chapters_verse_glyph_letters_draw.mjs";
export async function bible_glyph_chapters_verse_glyph_letters_draw_multiple(
  glyphs_comma,
) {
  "$plain glyphs_comma";
  "the glyphs are NAMES of pictures, joined by commas, each spelled as the root table spells it. Each is handed to a reading that looks it up, and nothing about any of them runs.";
  "Draws SEVERAL named pictures onto the English words still standing in letters for them, one picture after another.";
  "IT TAKES ITS SET RATHER THAN FINDING IT, AND THE REASON IS THAT THE SET IS A CHOICE (2026-09-18). The reading next door names every picture the tables seat that no chapter has drawn once, and on the day this was written that answer held twenty six names - four seated an hour before, and twenty two that are the commonest function words in either language. The direct object marker alone stands eleven thousand times, the Greek article far more. Drawing those is a decision about what the whole Bible looks like, and the repo's rule about a self-finding command is explicitly for a set that is derivable rather than chosen.";
  "SO THE PAIR IS THE POINT AND NEITHER HALF IS THE WHOLE. The reading finds the candidates and cannot act; this acts and cannot choose. A caller who wants everything undrawn can hand this that reading's answer and has then said so in the arguments, which is exactly the record that was missing when the same work was five invocations typed by hand.";
  "It maps rather than visits, for the reason the canonicalizing plural gives: visiting would run each draw and drop what it reported, and what it reported is the refusals, which are the half a person has to read.";
  arguments_assert(arguments, 1);
  let outputs = await text_split_comma_map_async(
    glyphs_comma,
    bible_glyph_chapters_verse_glyph_letters_draw,
  );
  return outputs;
}
