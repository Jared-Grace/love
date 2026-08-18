import { app_emoji_bible_tradition_orthodox } from "./app_emoji_bible_tradition_orthodox.mjs";
import { bible_glyph_characters_orthodox } from "./bible_glyph_characters_orthodox.mjs";
import { equal } from "./equal.mjs";
export function app_emoji_bible_traditions(name) {
  "$plain name";
  "the name says which way of drawing the glyphs was chosen. It is a word to look up and nothing that runs.";
  "The chosen way of drawing, turned into the list of redrawings to lay over the base vocabulary.";
  "One name in, a list out, because the reader picks one thing and the drawing machinery stacks any number. Keeping the stored answer to a single word means a reader's choice can be read and understood at a glance, while the machinery underneath stays able to stack a second tradition on the day one is wanted.";
  "An unrecognised name draws the base rather than failing. The name comes off the reader's own device, where it may have been left by a version of this page that has since been replaced, and a Bible that refuses to open because a preference went out of date is worse in every case than one that opens plainly.";
  let right = app_emoji_bible_tradition_orthodox();
  let orthodox = equal(name, right);
  if (orthodox) {
    let characters = bible_glyph_characters_orthodox();
    let r = [characters];
    return r;
  }
  let r2 = [];
  return r2;
}
